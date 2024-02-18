---
toc: false
title: Beta Distribution
---

```js
import jstat from "npm:jstat";
import {plotBetaPDF} from "../components/distribution_plots.js";
```

## Beta distribution

<div class="grid grid-cols-2">
  <div class="card">
    <h2><b>Definition</b></h2><br>
    ${tex`X\sim \operatorname{Beta}(\alpha, \beta)`}, for ${tex`X>0`}
    <br><br><br>
    A random variable following the Beta distribution has density function
    <br>
    ${tex.block`f(x) = \frac{1}{\Beta(\alpha,\beta)} x^{\alpha-1}(1-x)^{\beta-1}`}
    where ${tex`\Beta(\alpha,\beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}`} is the beta function.
  </div>
  <div class="card grid-rowspan-2">
    <h2><b>Probability density function</b></h2><br>
    ${paramSlider}<br>
    ${resize((width) => plotBetaPDF(alpha, beta, quantile, true, width))}
  </div>
  <div class="card">
    <h2><b>Moments and quantile</b></h2><br>
    ${tex`
    \text{If } X \sim \operatorname{Beta}(${alpha}, ${beta}) \text{ then } \\[1em] 
    \begin{aligned}
      &E( X) =\frac{\alpha}{\alpha + \beta} = ${(params[0]/(params[0] + params[1])).toPrecision(2)} \\[1em]
      &Var( X) = \frac{\alpha \beta}{(\alpha + \beta)^2(\alpha + \beta + 1)} = ${((params[0]*params[1])/((params[0] + params[1])^2*(params[0] + params[1] +1 ))).toPrecision(2)} \\[1em]
      &P( X\leq ${params[2]}) =${betacdf.toPrecision(4)}
    \end{aligned}
    `}
  </div>
</div>

```js
const paramSlider = Inputs.form([
      Inputs.range([0.1, 20], {value: 3, step: 0.1, label: tex`\alpha`}),
      Inputs.range([0.1, 20], {value: 3, step: 0.1, label: tex`\beta`}),
      Inputs.range([0, 1], {value: 0.2, step: 0.01, label: "quantile"})
    ]);
const params = Generators.input(paramSlider);
```

```js
const alpha = params[0];
const beta = params[1];
const quantile = params[2];
const betacdf = jstat.beta.cdf(quantile, alpha, beta);
```

