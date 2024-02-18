---
toc: false
title: Binomial Distribution
---

```js
import jstat from "npm:jstat";
import {plotBinomialPDF} from "../components/distribution_plots.js";
```

## Binomial distribution

<div class="grid grid-cols-2">
  <div class="card">
    <h2><b>Definition</b></h2><br>
    ${tex`X\sim \operatorname{Binomial}(n,p)`}, for ${tex`X \in \{0,1,2,\ldots,n \}`}
    <br><br><br>
    A random variable following the Binomial distribution has probability mass function
    <br>
    ${tex.block`P(X=x)= \binom{n}{x}p^x (1-p)^{n-x}`}
  </div>
  <div class="card grid-rowspan-2">
    <h2><b>Probability mass function</b></h2><br>
    ${paramSlider}<br>
    ${resize((width) => plotBinomialPDF(n, p, quantile, true, width))}
  </div>
  <div class="card">
    <h2><b>Moments and quantile</b></h2><br>
    ${tex`
    \text{If } X \sim \operatorname{Binomial}(${n},${p}) \text{ then } \\[1em] 
    \begin{aligned}
        &\mathrm{E}( X) =  np = ${(n*p).toPrecision(3)} \\[0.5em]
        &\mathrm{Var}( X) =  np(1-p)  = ${(n*p*(1-p)).toPrecision(3)} \\[0.5em]
        &\mathrm{P}( X\leq ${quantile}) =${binomialcdf.toPrecision(4)}
    \end{aligned}
    `}
  </div>
</div>

```js
const paramSlider = Inputs.form([
      Inputs.range([1, 50], {value: 10, step: 1, label: tex`n`}),
      Inputs.range([0.01, 0.99], {value: 0.3, step: 0.01, label: tex`p`}),
      Inputs.range([0, 50], {value: 1, step: 1, label: "quantile"})
    ]);
const params = Generators.input(paramSlider);
```

```js
const n = params[0];
const p = params[1];
const quantile = params[2];
const binomialcdf = jstat.binomial.cdf(quantile, n, p);
```

