---
toc: false
title: Exponential Distribution
---

```js
import jstat from "npm:jstat";
import {plotExponPDF} from "../components/distribution_plots.js";
```

## Exponential distribution

<div class="grid grid-cols-2">
  <div class="card">
    <h2><b>Definition</b></h2><br>
    ${tex`X\sim \operatorname{Exponential}(\lambda)`}, for ${tex`X>0`}
    <br><br><br>
    A random variable following the Exponential distribution has density function
    <br>
    ${tex.block`f(x) = \lambda e^{-\lambda x}\text{ for }x>0`}
  </div>
  <div class="card grid-rowspan-2">
    <h2><b>Probability density function</b></h2><br>
    ${paramSlider}<br>
    ${resize((width) => plotExponPDF(lambda, quantile, true, width))}
  </div>
  <div class="card">
    <h2><b>Moments and quantile</b></h2><br>
    ${tex`
    \text{If } X \sim \operatorname{Exponential}(${lambda}) \text{ then } \\[1em] 
    \begin{aligned}
        &\mathrm{E}( X) =  \frac{1}{\lambda} = ${(1/lambda).toPrecision(3)} \\[0.5em]
        &\mathrm{Var}( X) =  \frac{1}{\lambda^2}  = ${(1/(lambda**2)).toPrecision(3)} \\[0.5em]
        &\mathrm{P}( X\leq ${quantile}) =${exponcdf.toPrecision(4)}
    \end{aligned}
    `}
  </div>
</div>

```js
const paramSlider = Inputs.form([
      Inputs.range([0, 10], {value: 2, step: 0.1, label: tex`\lambda`}),
      Inputs.range([0, 10], {value: 1, step: 0.1, label: "quantile"})
    ]);
const params = Generators.input(paramSlider);
```

```js
const lambda = params[0];
const quantile = params[1];
const exponcdf = jstat.exponential.cdf(quantile, lambda);
```

