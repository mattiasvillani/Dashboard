---
toc: false
theme: slate
title: Bayesian updating
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

## Bayesian updating

<div class="grid grid-cols-4">
  <div class="card">
    <a href="distributions/poisson"><b>Poisson model with Gamma prior</b><br></a>
    <center><img src="images/plt_poisson.svg" alt="Poisson distribution image" 
      style="width:96px;height:96px;">
    <img src="images/plt_gamma.svg" alt="Gamma distribution image" 
      style="width:96px;height:96px;">
    </center>
  </div>
  <div class="card">
    <a href="distributions/poisson"><b>Normal model with Normal prior</b><br></a>
    <center><img src="images/plt_normal.svg" alt="Normal distribution image" 
      style="width:96px;height:96px;">
    <img src="images/plt_normal.svg" alt="Normal distribution image" 
      style="width:96px;height:96px;">
    </center>
  </div>
  <div class="card">
    <b>Normal</b>
  </div>
  <div class="card">
    Weibull
  </div>
</div>

