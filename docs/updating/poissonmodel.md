---
toc: false
title: Updating in the iid Poisson model
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>

```js
const md_colour = "#f5f5dc";
import jstat from "npm:jstat";
```

## Poisson distribution


<div class="grid grid-cols-2" style="grid-auto-rows: 370px;">
<div class="card">${tex`X\sim \operatorname{Poisson}(\lambda)`}, for ${tex`X \in \{0,1,2,\ldots \}`}
<br><br>
A random variable following the Poisson distribution has probability mass function
<br>
${tex.block`P(X=x)= \frac{\lambda^x e^{-\lambda}}{x!}`}
<br>
${tex`\text{If } X \sim \operatorname{Poisson}(${params[0]}) \text{ then } \\[1em] 
\begin{aligned}
    &\mathrm{E}( X) =  \lambda = ${params[0].toPrecision(3)} \\[0.5em]
    &\mathrm{Var}( X) =  \lambda  = ${params[0].toPrecision(3)} \\[0.5em]
    &\mathrm{P}( X\leq ${params[1]}) =${poiscdf.toPrecision(4)}
\end{aligned}
`}
</div>
  <div class="card">${
    resize((width) => Plot.plot({
    color: { 
      legend: false
    },
    x: {
      label: "x",
      axis: true
    },
    y: {
      label: "f(x)",
      axis: true
    },
    marks: [
      Plot.ruleY([0]),
      Plot.barY(poispdf,{x: "x", y: "pdf", fill: "#C1E1C1", strokeWidth: 0, opacity: 1,
                title: (d) => `P(X=${d.x}) = ${(d.pdf).toPrecision(4)}`}),
      Plot.barY(poispdf, {filter: d => d.x <= params[1], x: "x", y: "pdf", fill: "#50C878", opacity: 1,
                title: (d) => `P(X=${d.x}) = ${(d.pdf).toPrecision(4)}`}),
      //Plot.tip(poispdf, Plot.pointerX({x: "x", y: "pdf"}))
    ]
  }))
  }</div>
</div>


```js
 const params = view(Inputs.form([
      Inputs.range([0.1, 20], {value: 2, step: 0.1, label: tex`\lambda:`}),
      Inputs.range([1, 40], {value: 1, step: 1, label: "quantile:"})
    ]));
```

```js
  const x = d3.range(0, params[0] + 4*Math.sqrt(params[0]), 1);
  const poispdf = x.map(x => ({x: x, pdf: jstat.poisson.pdf(x, params[0])}));
  const poiscdf = jstat.poisson.cdf(params[1], params[0]);
```
