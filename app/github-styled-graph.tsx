function styleGraphSvg(svg: string) {
  let output = svg.replace(/<svg([^>]*)>/, (match, attrs) => {
    const widthMatch = match.match(/width="(\d+)"/);
    const heightMatch = match.match(/height="(\d+)"/);
    const width = widthMatch ? widthMatch[1] : "663";
    const height = heightMatch ? heightMatch[1] : "104";

    let nextAttrs = attrs
      .replace(/\swidth="[^"]*"/, "")
      .replace(/\sheight="[^"]*"/, "");

    if (!/viewBox=/.test(nextAttrs)) {
      nextAttrs += ` viewBox="0 0 ${width} ${height}"`;
    }

    if (/style="[^"]*"/.test(nextAttrs)) {
      nextAttrs = nextAttrs.replace(
        /style="([^"]*)"/,
        (m: string, styleContent: string) =>
          `style="${styleContent};width:100%;height:auto;display:block;"`
      );
    } else {
      nextAttrs += ' style="width:100%;height:auto;display:block;"';
    }

    return `<svg${nextAttrs}>`;
  });

  output = output.replace(/<rect([^>]*?)\/>/g, (match, attrs) => {
    if (!attrs.includes("data-date=")) {
      return match;
    }

    const fillMatch = attrs.match(/fill:([^;"]+)/);
    const fill = fillMatch ? fillMatch[1].trim().toLowerCase() : "";
    const replacementFill =
      fill === "#eeeeee" ? "#111827" : fill === "#c6e48b" ? "#22c55e" : fill;

    const hasStyle = /style="[^"]*"/.test(attrs);
    const updatedAttrs = hasStyle
      ? attrs.replace(/style="([^"]*)"/, (m, styleContent: string) => {
          const nextStyle = styleContent.replace(/fill:[^;"]+;?/g, "").trim();
          const withSemicolon =
            nextStyle.length > 0 && !nextStyle.endsWith(";")
              ? `${nextStyle};`
              : nextStyle;
          return `style="${withSemicolon}fill:${replacementFill};shape-rendering:crispedges;"`;
        })
      : `${attrs} style="fill:${replacementFill};shape-rendering:crispedges;"`;

    return `<rect${updatedAttrs}/>`;
  });

  return output;
}

export default async function GithubStyledGraph() {
  const response = await fetch("https://ghchart.rshah.org/timethedev", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return (
      <div className="p-4 text-sm text-zinc-400">
        Contribution graph is temporarily unavailable.
      </div>
    );
  }

  const rawSvg = await response.text();
  const styledSvg = styleGraphSvg(rawSvg);

  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: styledSvg }}
      aria-hidden="true"
    />
  );
}
