---
toc: false
title: Geometric Distribution
---

```js
import jstat from "npm:jstat";
import {plotGeometricPDF} from "../components/distribution_plots.js";
```

## Geometric distribution

<div class="grid grid-cols-2">
  <div class="card">
    <h2><b>Definition</b></h2><br>
    ${tex`X\sim \operatorname{Geometric}(p)`}, for ${tex`X \in \{0,1,2,\ldots \}`}
    <br><br><br>
    A random variable following the Geometric distribution has probability mass function
    <br>
    ${tex.block`P(X=x)= p (1-p)^{x-1}`}
  </div>
  <div class="card grid-rowspan-2">
    <h2><b>Probability mass function</b></h2><br>
    ${paramSlider}<br>
    ${resize((width) => plotGeometricPDF(p, quantile, true, width))}
  </div>
  <div class="card">
    <h2><b>Moments and quantile</b></h2><br>
    ${tex`
    \text{If } X \sim \operatorname{Geometric}(${p}) \text{ then } \\[1em] 
    \begin{aligned}
        &\mathrm{E}( X) =  \frac{1-p}{p} = ${((1-p)/p).toPrecision(3)} \\[0.5em]
        &\mathrm{Var}( X) =  \frac{1-p}{p^2}  = ${((1-p)/(p**2)).toPrecision(3)} \\[0.5em]
        &\mathrm{P}( X\leq ${quantile}) =${geometriccdf.toPrecision(4)}
    \end{aligned}
    `}
  </div>
</div>

```js
const paramSlider = Inputs.form([
      Inputs.range([0.01, 0.99], {value: 0.3, step: 0.01, label: tex`p`}),
      Inputs.range([0, 50], {value: 1, step: 1, label: "quantile"})
    ]);
const params = Generators.input(paramSlider);
```

```js
const p = params[0];
const quantile = params[1];
const geometriccdf = jstat.negbin.cdf(quantile, 1, p);
```

