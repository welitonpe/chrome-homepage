import { useEffect, useRef, useState } from "react";
import { select, selectAll, Selection } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";

const data = [
  {
    name: "foo",
    number: 9000,
  },
  {
    name: "bar",
    number: 2340,
  },
  {
    name: "baz",
    number: 3463,
  },
  {
    name: "hoge",
    number: 7654,
  },
  {
    name: "piyo",
    number: 8746,
  },
];

const dimensions = {
  width: 800,
  height: 500,
  chartWidth: 700,
  chartHeight: 400,
  marginLeft: 100,
};

const Mapa: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  const maxValue = max(data, (d) => d.number);

  const y = scaleLinear()
    .domain([0, maxValue!])
    .range([0, dimensions.chartHeight]);

  const x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, dimensions.chartWidth])
    .paddingInner(0.05);

  const yAxis = axisLeft(y)
    .ticks(3)
    .tickFormat((d) => `$${d} units`);
  const xAxix = axisBottom(x);

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current));
    } else {
      const xAxixGroup = selection
        .append("g")
        .attr(
          "transform",
          `translate(${dimensions.marginLeft},${dimensions.chartHeight})`
        )
        .call(xAxix);

      const yAxisGroup = selection
        .append("g")
        .attr("transform", `translate(${dimensions.marginLeft},0)`)
        .call(yAxis);

      selection
        .append("g")
        .attr("transform", `translate(${dimensions.marginLeft},0)`)
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("x", (d) => x(d.name)!)
        .attr("fill", "orange")
        .attr("height", (d) => y(d.number));
    }
  }, []);

  return (
    <div>
      <svg ref={ref} width={dimensions.width} height={dimensions.height} />
    </div>
  );
};

export default Mapa;
