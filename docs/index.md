---
toc: false
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

<div class="hero">
  <h1>Bayesian Learning</h1>
  <h2>A collection of reactive dashboards for the Bayesian Learning book</h2>
</div>


```js
import jstat from "npm:jstat";
import {plotGeometricPDF, plotExponPDF} from "./components/distribution_plots.js";
```
<div class="grid grid-cols-2">
  <div class="card">
    ${paramSlider}<br>
    ${resize((width) => plotGeometricPDF(p, quantile, true, width))}
  </div>
  <div class="card">
    ${paramSlider2}<br>
    ${resize((width) => plotExponPDF(lambda, quantile2, true, width))}
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

```js
const paramSlider2 = Inputs.form([
      Inputs.range([0, 10], {value: 2, step: 0.1, label: tex`\lambda`}),
      Inputs.range([0, 10], {value: 1, step: 0.1, label: "quantile"})
    ]);
const params2 = Generators.input(paramSlider2);
```

```js
const lambda = params2[0];
const quantile2 = params2[1];
const exponcdf = jstat.exponential.cdf(quantile2, lambda);
```
