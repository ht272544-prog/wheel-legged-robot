from pathlib import Path
import json, subprocess
from PIL import Image, ImageDraw, ImageFont
from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.section import WD_ORIENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Inches, Pt, RGBColor

ROOT=Path(__file__).resolve().parents[1]; OUT=ROOT/'documents'; ASSETS=OUT/'assets'
OUT.mkdir(exist_ok=True); ASSETS.mkdir(exist_ok=True)
js="const fs=require('fs'),vm=require('vm');const c={window:{}};vm.runInNewContext(fs.readFileSync(process.argv[1],'utf8'),c);process.stdout.write(JSON.stringify(c.window.WLX_DATA));"
D=json.loads(subprocess.check_output(['node','-e',js,str(ROOT/'data'/'requirements.js')],text=True,encoding='utf-8'))
NAVY='071711'; GREEN='0D3026'; MINT='73E6C7'; ORANGE='FF8E46'; GRAY='5E716A'

def font(size,bold=False):
    return ImageFont.truetype('C:/Windows/Fonts/msyhbd.ttc' if bold else 'C:/Windows/Fonts/msyh.ttc',size)
def arrow(draw,a,b,color=(115,230,199)):
    draw.line((a,b),fill=color,width=5); x,y=b; draw.polygon([(x,y),(x-18,y-10),(x-18,y+10)],fill=color)
def box(draw,xy,title,sub='',accent=(115,230,199)):
    x1,y1,x2,y2=xy; draw.rounded_rectangle(xy,14,fill=(11,33,26),outline=accent,width=3)
    draw.text((x1+18,y1+16),title,font=font(25,True),fill=(237,247,242))
    if sub: draw.text((x1+18,y1+58),sub,font=font(17),fill=(169,197,187))
def context_img():
    im=Image.new('RGB',(1800,900),(6,17,14)); d=ImageDraw.Draw(im)
    d.text((55,40),'WL-X 系统运行环境与外部接口',font=font(42,True),fill=(237,247,242)); d.text((55,100),'SYSTEM CONTEXT / CONCEPT BASELINE',font=font(18,True),fill=(255,142,70))
    box(d,(650,300,1150,600),'WL-X 轮腿式无人平台','关注系统 / SYSTEM OF INTEREST',(255,142,70))
    nodes=[((80,210,430,350),'任务指挥系统','任务包 / 授权 / 终止'),((80,560,430,700),'操作与伴随人员','监督 / 接管 / 急停'),((1370,210,1720,350),'战术网络与无人机','态势 / 线索 / 时间'),((1370,560,1720,700),'保障与验证体系','补能 / 维护 / 证据')]
    for xy,t,s in nodes: box(d,xy,t,s)
    arrow(d,(430,280),(650,380)); arrow(d,(650,500),(430,630)); arrow(d,(1150,380),(1370,280)); arrow(d,(1370,630),(1150,500))
    p=ASSETS/'system_context.png'; im.save(p); return p
def trace_img():
    im=Image.new('RGB',(1800,620),(6,17,14)); d=ImageDraw.Draw(im); d.text((55,40),'统一追溯模型',font=font(42,True),fill=(237,247,242))
    labels=[('BRS','业务结果'),('StRS','相关方需求'),('SyRS','系统需求'),('ARCH','架构分配'),('CONTROL','控制闭环'),('SAFETY','安全约束'),('V&V','验证证据')]
    x=45
    for i,(a,b) in enumerate(labels):
        box(d,(x,220,x+210,390),a,b,(255,142,70) if i in (0,5) else (115,230,199))
        if i<6: arrow(d,(x+210,305),(x+245,305))
        x+=245
    d.text((45,470),'BRS-05 → StR-SAF-04 → SYS-COM-02 / SYS-SAF-04 → L04 / L06 → SSR-COM-01 → 场景试验',font=font(23),fill=(169,197,187))
    p=ASSETS/'traceability.png'; im.save(p); return p
def shade(cell,color):
    pr=cell._tc.get_or_add_tcPr(); sh=pr.find(qn('w:shd'))
    if sh is None: sh=OxmlElement('w:shd'); pr.append(sh)
    sh.set(qn('w:fill'),color)
def cell(cell,text,bold=False,color='1A2923',size=8.3):
    cell.text=''; p=cell.paragraphs[0]; r=p.add_run(str(text)); r.bold=bold; r.font.name='Microsoft YaHei'; r._element.rPr.rFonts.set(qn('w:eastAsia'),'Microsoft YaHei'); r.font.size=Pt(size); r.font.color.rgb=RGBColor.from_string(color); cell.vertical_alignment=WD_CELL_VERTICAL_ALIGNMENT.CENTER
def table(doc,heads,rows,widths=None):
    t=doc.add_table(rows=1,cols=len(heads)); t.style='Table Grid'; t.alignment=WD_TABLE_ALIGNMENT.CENTER
    trPr=t.rows[0]._tr.get_or_add_trPr(); repeat=OxmlElement('w:tblHeader'); repeat.set(qn('w:val'),'true'); trPr.append(repeat)
    for i,h in enumerate(heads): cell(t.rows[0].cells[i],h,True,'FFFFFF',8.5); shade(t.rows[0].cells[i],GREEN)
    for ri,row in enumerate(rows):
        cs=t.add_row().cells
        row_pr=t.rows[-1]._tr.get_or_add_trPr(); no_split=OxmlElement('w:cantSplit'); row_pr.append(no_split)
        for i,v in enumerate(row): cell(cs[i],v); shade(cs[i],'F1F7F4' if ri%2 else 'FFFFFF')
    if widths:
        for row in t.rows:
            for i,w in enumerate(widths): row.cells[i].width=Cm(w)
    if len(rows)<=6:
        for row in t.rows[:-1]:
            for c in row.cells:
                for p in c.paragraphs: p.paragraph_format.keep_with_next=True
    doc.add_paragraph(); return t
def field(p,code):
    r=p.add_run(); begin=OxmlElement('w:fldChar'); begin.set(qn('w:fldCharType'),'begin'); instr=OxmlElement('w:instrText'); instr.set(qn('xml:space'),'preserve'); instr.text=code; sep=OxmlElement('w:fldChar'); sep.set(qn('w:fldCharType'),'separate'); txt=OxmlElement('w:t'); txt.text='更新域以显示'; end=OxmlElement('w:fldChar'); end.set(qn('w:fldCharType'),'end'); r._r.extend([begin,instr,sep,txt,end])
def heading(doc,text,level=1):
    p=doc.add_heading(text,level); p.paragraph_format.space_before=Pt(12); p.paragraph_format.space_after=Pt(6); return p
def requirement(doc,r):
    p=doc.add_paragraph(); p.paragraph_format.keep_with_next=True; q=p.add_run(f"{r['id']}  {r['title']}"); q.bold=True; q.font.size=Pt(11); q.font.color.rgb=RGBColor.from_string(ORANGE)
    p=doc.add_paragraph(r['text']); p.paragraph_format.left_indent=Cm(.7); p.paragraph_format.keep_with_next=True
    table(doc,['属性','内容'],[['类别',r['cat']],['StRS 来源','、'.join(r['source'])],['架构分配','、'.join(r['allocated'])],['验证方法',r['verify']],['通过准则',r['criterion']]],[3,13.8])

doc=Document(); sec=doc.sections[0]; sec.top_margin=Cm(2.2); sec.bottom_margin=Cm(2); sec.left_margin=Cm(2.2); sec.right_margin=Cm(2)
styles=doc.styles; normal=styles['Normal']; normal.font.name='Microsoft YaHei'; normal._element.rPr.rFonts.set(qn('w:eastAsia'),'Microsoft YaHei'); normal.font.size=Pt(10.5); normal.paragraph_format.space_after=Pt(5); normal.paragraph_format.line_spacing=1.25
for name,size,color in [('Title',34,NAVY),('Heading 1',20,GREEN),('Heading 2',15,GREEN),('Heading 3',12,ORANGE)]:
    s=styles[name]; s.font.name='Microsoft YaHei'; s._element.rPr.rFonts.set(qn('w:eastAsia'),'Microsoft YaHei'); s.font.size=Pt(size); s.font.color.rgb=RGBColor.from_string(color); s.font.bold=True
hdr=sec.header.paragraphs[0]; hdr.text='XUANWU / WL-X  ·  SYSTEM REQUIREMENTS SPECIFICATION  ·  V1.0'; hdr.runs[0].font.color.rgb=RGBColor.from_string(GRAY)
ftr=sec.footer.paragraphs[0]; ftr.alignment=WD_ALIGN_PARAGRAPH.CENTER; ftr.add_run('概念基线  |  受控文档  |  '); field(ftr,'PAGE')

p=doc.add_paragraph('XUANWU / WL-X'); p.alignment=WD_ALIGN_PARAGRAPH.CENTER; r=p.runs[0]; r.font.name='Consolas'; r.font.size=Pt(18); r.bold=True; r.font.color.rgb=RGBColor.from_string(ORANGE)
p=doc.add_paragraph(D['meta']['title']); p.style=styles['Title']; p.alignment=WD_ALIGN_PARAGRAPH.CENTER; p.paragraph_format.space_before=Pt(80)
p=doc.add_paragraph('SYSTEM REQUIREMENTS SPECIFICATION'); p.alignment=WD_ALIGN_PARAGRAPH.CENTER; p.runs[0].font.size=Pt(14); p.runs[0].font.color.rgb=RGBColor.from_string(MINT)
doc.add_paragraph('\n'); table(doc,['文档属性','内容'],[['文档编号','WLX-SYRS-001'],['版本',D['meta']['version']],['状态',D['meta']['status']],['基线日期',D['meta']['date']],['关注系统','玄武 WL-X 轮腿式无人平台'],['编制目的','系统定义、初始架构分配与验证基线']],[4,11.5]); doc.add_paragraph('本说明书与 WL-X 系统工程网站使用同一份需求数据源。',style='Caption').alignment=WD_ALIGN_PARAGRAPH.CENTER; doc.add_page_break()
heading(doc,'文档控制',1); table(doc,['版本','日期','状态','变更说明'],[['1.0',D['meta']['date'],'概念基线','首次建立系统需求、架构分配、安全需求与追溯关系']],[2,3,3,9]); heading(doc,'评审与批准',2); table(doc,['角色','姓名/签署','日期','意见'],[['编制','','',''],['系统工程评审','','',''],['安全评审','','',''],['批准','','','']],[4,4,3,6]); heading(doc,'目录',1); field(doc.add_paragraph(),'TOC \\o "1-3" \\h \\z \\u'); doc.add_page_break()

heading(doc,'1 范围与系统概述',1); heading(doc,'1.1 目的',2); doc.add_paragraph('本说明书定义 WL-X 在复杂地形环境侦察任务中的系统级义务，为初始系统架构、控制设计、安全分析、集成验证和配置管理提供统一基线。'); heading(doc,'1.2 关注系统',2); doc.add_paragraph('WL-X 是具备滚行、越障与车体调平能力的轮腿式无人地面平台。关注系统包括任务与模式管理、感知与状态估计、规划与运动控制、通信与数据服务、人机交互、安全监督、能源健康、事件记录和任务载荷受控接口。'); heading(doc,'1.3 任务场景',2); doc.add_paragraph(D['meta']['scenario']+'。任务线程覆盖任务筹划、部署检查、机动侦察、异常处置、撤收与复盘。'); doc.add_picture(str(context_img()),width=Inches(6.75)); doc.paragraphs[-1].alignment=WD_ALIGN_PARAGRAPH.CENTER; doc.add_paragraph('图 1  WL-X 系统运行环境与外部接口',style='Caption').alignment=WD_ALIGN_PARAGRAPH.CENTER
doc.add_page_break(); heading(doc,'2 规范性与参考资料',1); table(doc,['编号','资料'],[['[R1]','郭宝柱，《系统工程——基于国际标准过程的研究与实践》，第4章与第5章框架。'],['[R2]','ISO/IEC/IEEE 29148:2018 — Requirements engineering.'],['[R3]','ISO/IEC/IEEE 15288:2023 — System life cycle processes.'],['[R4]','NASA Systems Engineering Handbook, Rev. 2.'],['[R5]','Leveson & Thomas, STPA Handbook, 2018.']],[2,15]); heading(doc,'2.1 术语与缩略语',2); table(doc,['缩略语','含义'],[['BRS','业务需求规格'],['ConOps','组织/体系运行概念'],['OpsCon','关注系统运行概念'],['StRS','相关方需求规格'],['SyRS','系统需求规格'],['STPA','系统理论过程分析'],['UCA','不安全控制行为'],['V&V','验证与确认']],[3.5,13.5])
heading(doc,'3 运行概念与系统状态',1); heading(doc,'3.1 正常任务线程',2)
for t in ['任务筹划：定义任务区域、目标、禁行区、授权边界与终止条件。','部署检查：完成平台自检、任务包校验、定位初始化与网络接入。','机动侦察：在授权边界内执行感知、规划、控制与态势发布。','异常处置：对链路、定位、感知、能源与驱动异常执行受限自主、安全停车或人工接管。','撤收复盘：返回并提交任务、告警、接管、配置和维护记录。']: doc.add_paragraph(t,style='List Number')
heading(doc,'3.2 运行状态',2); table(doc,['状态','名称','进入条件','主要行为','退出条件'],[['M1','待机检查','上电或维护完成','关键功能检查与放行','检查通过或转维护'],['M2','部署机动','检查通过且获授权','定位、网络、任务与载荷初始化','任务就绪'],['M3','任务运行','任务包有效且授权完成','感知、规划、控制、态势回传','任务完成或异常'],['M4','受限自主','链路、定位、感知或健康异常','限速、驻停扫描、撤离或等待接管','恢复、接管或停车'],['M5','安全停车','急停或安全条件触发','抑制运动、执行制动并记录','人工确认后恢复/维护']],[1.4,2.4,4.1,5.7,3.2])
heading(doc,'4 外部接口需求',1); table(doc,['接口','输入','输出','关键约束'],[['任务指挥接口','任务包、授权、暂停与终止','任务确认、进度、态势与告警','消息完整性、身份与权限校验'],['人员接口','监督、接管、急停','模式、意图、告警与停车状态','急停链独立；状态可理解'],['战术网络接口','时间、任务、协同线索','态势、健康、链路状态','弱链路优先级与失联判定'],['任务载荷接口','身份、连接与数据','受控供能、数据与使能','机械、电气、数据与安全联锁'],['保障接口','配置、补能、维修操作','检查、诊断、维护与审计记录','受控更新、时间一致与可追溯']],[3.2,4.2,4.2,5.2])
heading(doc,'5 系统需求',1); doc.add_paragraph('每条需求使用唯一标识，并给出 StRS 来源、初始架构分配、验证方法和通过准则。')
cats=[]
for r in D['syrs']:
    if r['cat'] not in cats: cats.append(r['cat'])
for i,cat in enumerate(cats,1):
    heading(doc,f'5.{i} {cat}需求',2)
    for r in [x for x in D['syrs'] if x['cat']==cat]: requirement(doc,r)
heading(doc,'6 初始系统架构与需求分配',1)
for idx,key,title in [(1,'functional','功能架构'),(2,'logical','逻辑架构'),(3,'physical','物理架构')]:
    heading(doc,f'6.{idx} {title}',2); table(doc,['ID','单元','职责','输入','输出','SyRS'],[[n['id'],n['name'],n['role'],n['inputs'],n['outputs'],'、'.join(n['req'])] for n in D['architecture'][key]],[1.2,3,4,3.2,3.2,4.5])
heading(doc,'7 系统控制与安全要求',1); heading(doc,'7.1 控制闭环',2); doc.add_paragraph('任务与模式管理生成目标和模式，规划与运动控制产生轮端、关节和制动指令；平台与环境状态由传感器和状态估计反馈闭合回路。安全监督持续检查人员接近、完整性、链路、能源和驱动健康，人工急停通过独立路径覆盖任务控制。'); heading(doc,'7.2 安全需求',2); table(doc,['ID','危险 / UCA','安全需求','系统来源','架构分配','验证'],[[r['id'],r['hazard']+'；'+r['uca'],r['text'],'、'.join(r['source']),'、'.join(r['modules']),r['verify']] for r in D['safety']],[2.1,4.7,5.8,3.2,2.8,3.2]); heading(doc,'7.3 安全架构',2); table(doc,['ID','安全单元','职责','安全需求分配'],[[n['id'],n['name'],n['role'],'、'.join(n['req'])] for n in D['safetyArchitecture']],[1.6,3.8,6,6])
heading(doc,'8 验证、追溯与配置控制',1); doc.add_picture(str(trace_img()),width=Inches(6.75)); doc.paragraphs[-1].alignment=WD_ALIGN_PARAGRAPH.CENTER; doc.add_paragraph('图 2  BRS—StRS—SyRS—架构—安全—验证追溯模型',style='Caption').alignment=WD_ALIGN_PARAGRAPH.CENTER; heading(doc,'8.1 SyRS 验证矩阵',2); table(doc,['SyRS','标题','StRS 来源','架构分配','方法','通过准则'],[[r['id'],r['title'],'、'.join(r['source']),'、'.join(r['allocated']),r['verify'],r['criterion']] for r in D['syrs']],[2.2,3.3,3.5,3.5,2.4,6]); heading(doc,'8.2 配置与变更原则',2)
for line in ['每条需求、架构节点和安全需求使用稳定的唯一标识。','需求变更应评估上游来源、下游分配、安全约束和验证证据。','批准后的需求、接口、验证准则和追溯矩阵作为同一基线受控。','网站在线视图与本 Word 文档由同一数据源生成并保持版本一致。']: doc.add_paragraph(line,style='List Bullet')
new=doc.add_section(); new.orientation=WD_ORIENT.LANDSCAPE; new.page_width,new.page_height=new.page_height,new.page_width; new.top_margin=Cm(1.6); new.bottom_margin=Cm(1.6); new.left_margin=Cm(1.5); new.right_margin=Cm(1.5); heading(doc,'附录 A 端到端追溯矩阵',1); rows=[]
for st in D['strs']:
    for sid in st['syrs']:
        sy=next((r for r in D['syrs'] if r['id']==sid),None)
        if sy: rows.append([st['brs'],st['id'],sid,'、'.join(sy['allocated']),'、'.join(r['id'] for r in D['safety'] if sid in r['source']) or '—',sy['verify']])
appendix_table=table(doc,['BRS','StRS','SyRS','架构分配','安全需求','验证方法'],rows,[2,3,3,4,4,3])
for row in appendix_table.rows:
    for c in row.cells:
        for p in c.paragraphs:
            p.paragraph_format.space_before=Pt(0); p.paragraph_format.space_after=Pt(0)
            for r in p.runs: r.font.size=Pt(7)
props=doc.core_properties; props.title=D['meta']['title']; props.subject='WL-X 系统需求、初始架构与安全追溯基线'; props.author='WL-X 系统工程项目组'; props.keywords='WL-X, SyRS, 系统需求, 轮腿式无人平台, 系统架构, STPA'
target=OUT/'WL-X_系统需求规格说明书_V1.0.docx'; doc.save(target); print(target)
