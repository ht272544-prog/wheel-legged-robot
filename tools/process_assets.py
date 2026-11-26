"""Build web-ready WL-X image assets from the user's source material.

Original files are never overwritten.  The generated outputs intentionally avoid
using any AI-generated labels or diagram connectors as engineering evidence.
"""

from pathlib import Path
from PIL import Image, ImageOps


PROJECT = Path(__file__).resolve().parents[1]
SOURCE = Path(r"E:\轮腿式无人作战平台\图片素材可用")
GENERATED_CUTOUT = Path(
    r"C:\Users\LENOVO\.codex\generated_images\01a1f920-8a40-7980-a28f-6b63d595bbeb"
    r"\exec-04bc3fd4-31c1-4957-9601-7a4f785dc4be.png"
)
GENERATED_GAME_BACKGROUND = Path(
    r"C:\Users\LENOVO\.codex\generated_images\01a1f920-8a40-7980-a28f-6b63d595bbeb"
    r"\exec-5097131d-ea81-4463-adcf-7d87a0a90499.png"
)


def save_webp(source: Path, target: Path, max_size: tuple[int, int], quality: int = 86) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    image = Image.open(source).convert("RGB")
    image.thumbnail(max_size, Image.Resampling.LANCZOS)
    image.save(target, "WEBP", quality=quality, method=6)


def main() -> None:
    # A clean transparent main-platform asset produced through the image editing workflow.
    cutout_target = PROJECT / "assets" / "vehicles" / "wlx-platform-cutout.png"
    cutout_target.parent.mkdir(parents=True, exist_ok=True)
    cutout = Image.open(GENERATED_CUTOUT).convert("RGBA")
    cutout.thumbnail((1600, 1100), Image.Resampling.LANCZOS)
    cutout.save(cutout_target, optimize=True)

    save_webp(
        SOURCE / "ChatGPT 图像 2026年11月20日 20_55_55-2.png",
        PROJECT / "assets" / "vehicles" / "wlx-multiview.webp",
        (1500, 1200),
    )
    save_webp(
        SOURCE / "ChatGPT 图像 2026年11月20日 20_56_00-3.png",
        PROJECT / "assets" / "systems" / "wlx-exploded.webp",
        (1400, 1100),
    )
    save_webp(
        SOURCE / "玄武WL-X山地侦察任务界面-12.png",
        PROJECT / "assets" / "scenarios" / "mountain-mission.webp",
        (1600, 900),
    )
    save_webp(
        GENERATED_GAME_BACKGROUND,
        PROJECT / "assets" / "game" / "wlx-adventure-scene.webp",
        (1600, 900),
    )

    # Extract only the visual robot comparison panels.  All embedded generated copy is discarded;
    # accurate captions and references are rendered in HTML next to these crops.
    comparison = Image.open(SOURCE / "五种战地机器人构型对比.png").convert("RGB")
    panel_width = comparison.width / 5
    crop_top = int(comparison.height * 0.17)
    crop_bottom = int(comparison.height * 0.52)
    vehicles_dir = PROJECT / "assets" / "vehicles"
    names = [
        "config-two-wheel",
        "config-four-wheel-leg",
        "config-six-wheel-leg",
        "config-transformable",
        "config-passive-wheel",
    ]
    for index, name in enumerate(names):
        left = int(index * panel_width + panel_width * 0.06)
        right = int((index + 1) * panel_width - panel_width * 0.06)
        crop = comparison.crop((left, crop_top, right, crop_bottom))
        crop = ImageOps.pad(
            crop,
            (720, 420),
            method=Image.Resampling.LANCZOS,
            color=(8, 19, 15),
            centering=(0.5, 0.55),
        )
        crop.save(vehicles_dir / f"{name}.webp", "WEBP", quality=86, method=6)


if __name__ == "__main__":
    main()
