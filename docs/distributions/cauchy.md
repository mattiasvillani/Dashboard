---
toc: false
title: Cauchy Distribution
---

```js
import jstat from "npm:jstat";
import {plotCauchyPDF} from "../components/distribution_plots.js";
```

## Cauchy distribution

<div class="grid grid-cols-2">
  <div class="card">
    <h2><b>Definition</b></h2><br>
    ${tex`X\sim \operatorname{Cauchy}(\mu, \tau)`}, for ${tex`-\infty<X<\infty`}
    <br><br><br>
    A random variable following the Cauchy distribution has density function
    <br>
    ${tex.block`f(x) = \frac{1}{\pi\tau\Big(1+\big( \frac{x-\mu}{\tau}  \big)^2  \Big)}`}
  </div>
  <div class="card grid-rowspan-3">
    <h2><b>Probability density function</b></h2><br>
    ${paramSlider}<br>
    ${resize((width) => plotCauchyPDF(mu, tau, quantile, true, width))}
  </div>
  <div class="card">
    <h2><b>Moments and quantile</b></h2><br>
    ${tex`
    \text{If } X \sim \operatorname{Cauchy}(${mu},${tau}) \text{ then } \\[1em] 
    \begin{aligned}
        &E( X) = \text{undefined} \\[0.5em]
        &Var( X) = \text{undefined} \\[0.5em]
        &\mathrm{P}( X\leq ${quantile}) =${cauchycdf.toPrecision(4)}
    \end{aligned}
    `}
  </div>
  <div class="card">
    <h2><b>Relations to other distributions</b></h2><br>
    <ul>
      <li>If ${tex`X\sim N(0,1)`} and ${tex`Y\sim N(0,1)`} are independent, then ${tex.block`X/Y\sim\mathrm{Cauchy}(0,1)`}</li>
      <li>If ${tex`X \sim \mathrm{Cauchy}(0,1)`} then ${tex.block`\mu + \tau X \sim \mathrm{Cauchy}(\mu,\tau^2)`}</li>
    </ul>
  </div>
</div>

```js
const paramSlider = Inputs.form([
      Inputs.range([-5, 5], {value: 0, step: 0.1, label: tex`\text{location }\mu`}),
      Inputs.range([0.1, 5], {value: 1, step: 0.1, label: tex`\text{scale }\tau`}),
      Inputs.range([-10, 10], {value: -1.96, step: 0.01, label: "quantile"})
    ]);
const params = Generators.input(paramSlider);
```

```js
const mu = params[0];
const tau = params[1];
const quantile = params[2];
const cauchycdf = jstat.studentt.cdf((quantile-mu)/tau, 1);
```

