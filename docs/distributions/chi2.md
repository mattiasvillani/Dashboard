---
toc: false
title: Chi2 Distribution
---

```js
import jstat from "npm:jstat";
import {plotChi2PDF} from "../components/distribution_plots.js";
```

## Chi2 distribution

<div class="grid grid-cols-2">
  <div class="card">
    <h2><b>Definition</b></h2><br>
    ${tex`X\sim \chi^2(\nu)`}, for ${tex`X>0`}
    <br><br><br>
    A random variable following the ${tex`\chi^2(\nu)`} distribution has density function
    <br>
    ${tex.block`f(x)=\frac{1}{2^{\nu/2}\Gamma(\nu/2)}\; x^{\nu/2-1} e^{-x/2}`}
  </div>
  <div class="card grid-rowspan-3">
    <h2><b>Probability density function</b></h2><br>
    ${paramSlider}<br>
    ${resize((width) => plotChi2PDF(nu, quantile, true, width))}
  </div>
  <div class="card">
    <h2><b>Moments and quantile</b></h2><br>
    ${tex`
      \begin{aligned}
      &\mathrm{E}( X) =\nu = ${params[0].toPrecision(2)} \\[1em]
      &\mathrm{V}( X) =2\nu= ${(2*params[0]).toPrecision(2)} \\[1em]
      &P( X\leq ${params[1]}) =${chi2cdf.toPrecision(4)}
      \end{aligned}
    `}
  </div>
    <div class="card">
    <h2><b>Relations to other distributions</b></h2><br>
    <ul>
      <li>If ${tex`X \sim \operatorname{N}(0,1)`} then ${tex.block`X^2 \sim \chi^2(1)`}</li>
      <li>If ${tex`X_1,X_2,\ldots,X_{\nu} \overset{\mathrm{iid}}{\sim} \operatorname{N}(0,1)`} then ${tex.block`\sum_{i=1}^{\nu}X_i^2 \sim \chi^2(\nu)`}</li>
    </ul>
  </div>
</div>

```js
const paramSlider = Inputs.form([
      Inputs.range([1, 20], {value: 4, step: 1, label: tex`\nu`}),
      Inputs.range([0.01, 20], {value: 2, step: 0.01, label: "quantile:"})
    ]);
const params = Generators.input(paramSlider);
```

```js
const nu = params[0];
const quantile = params[1];
const chi2cdf = jstat.chisquare.cdf(quantile, nu);
```

