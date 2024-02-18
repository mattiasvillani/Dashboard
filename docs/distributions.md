---
toc: false
title: Probability distributions
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

## Distributions
<br><br>
```js
import {plotBinomialPDF, plotGeometricPDF, plotPoissonPDF} from "./components/distribution_plots.js";
```


### Discrete distributions

<div class="grid grid-cols-2">
  <div class="grid grid-cols-4">
    <div class="card">
      <center>
      <a href="distributions/binomial"><b>Binomial</b><br><br>
        ${resize((width) => plotBinomialPDF(10, 0.3, 1, false, width))}
      </center>
    </div>
    <div class="card">
      <center>
      <a href="distributions/geometric"><b>Geometric</b><br><br>
        ${resize((width) => plotGeometricPDF(0.4, 2, false, width))}
      </center>
    </div>
    <div class="card">
      <center>
      <a href="distributions/poisson"><b>Poisson</b><br><br>
        ${resize((width) => plotPoissonPDF(3, 1, false, width))}
      </center>
    </div>
    <div class="card">
    </div>
  </div>
  <div class="grid grid-cols-4">
    <div class="card">
    </div>
    <div class="card">
    </div>
    <div class="card">
    </div>
    <div class="card">
    </div>
  </div>
</div>

```js
import {plotBetaPDF, plotExponPDF, plotCauchyPDF, plotChi2PDF} from "./components/distribution_plots.js";
```

### Continuous distributions

<div class="grid grid-cols-2">
  <div class="grid grid-cols-4">
    <div class="card">
      <center>
      <a href="distributions/beta"><b>Beta</b><br><br>
        ${resize((width) => plotBetaPDF(2, 3, 0.3, false, width))}
      </center>
    </div>
    <div class="card">
      <center>
      <a href="distributions/exponential"><b>Exponential</b><br><br>
        ${resize((width) => plotExponPDF(1, 1, false, width))}
      </center>
    </div>
    <div class="card">
      <center>
      <a href="distributions/cauchy"><b>Cauchy</b><br><br>
        ${resize((width) => plotCauchyPDF(0, 1, -2, false, width))}
      </center>
    </div>
    <div class="card">
      <center>
      <a href="distributions/chi2"><b>Chi2</b><br><br>
        ${resize((width) => plotChi2PDF(3, 1, false, width))}
      </center>
    </div>  
  </div>
  <div class="grid grid-cols-4">
    <div class="card">
    </div>
    <div class="card">
    </div>
    <div class="card">
    </div>
    <div class="card">
    </div>  
  </div>
</div>
