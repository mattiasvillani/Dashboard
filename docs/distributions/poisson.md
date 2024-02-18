---
toc: false
title: Poisson Distribution
---

```js
import jstat from "npm:jstat";
import {plotPoissonPDF} from "../components/distribution_plots.js";
```

## Poisson distribution

<div class="grid grid-cols-2">
  <div class="card">
    <h2><b>Definition</b></h2><br>
    ${tex`X\sim \operatorname{Poisson}(\lambda)`}, for ${tex`X \in \{0,1,2,\ldots \}`}
    <br><br><br>
    A random variable following the Poisson distribution has probability mass function
    <br>
    ${tex.block`P(X=x)= \frac{\lambda^x e^{-\lambda}}{x!}`}
  </div>
  <div class="card grid-rowspan-2">
    <h2><b>Probability mass function</b></h2><br>
    ${paramSlider}<br>
    ${resize((width) => plotPoissonPDF(lambda, quantile, true, width))}
  </div>
  <div class="card">
    <h2><b>Moments and quantile</b></h2><br>
    ${tex`
    \text{If } X \sim \operatorname{Poisson}(${lambda}) \text{ then } \\[1em] 
    \begin{aligned}
        &\mathrm{E}( X) =  \lambda = ${lambda.toPrecision(3)} \\[0.5em]
        &\mathrm{Var}( X) =  \lambda  = ${lambda.toPrecision(3)} \\[0.5em]
        &\mathrm{P}( X\leq ${quantile}) =${poiscdf.toPrecision(4)}
    \end{aligned}
    `}
  </div>
</div>

```js
const paramSlider = Inputs.form([
      Inputs.range([0.1, 20], {value: 2, step: 0.1, label: tex`\lambda`}),
      Inputs.range([1, 40], {value: 1, step: 1, label: "quantile"})
    ]);
const params = Generators.input(paramSlider);
```

```js
const lambda = params[0];
const quantile = params[1];
const poiscdf = jstat.poisson.cdf(quantile, lambda);
```

