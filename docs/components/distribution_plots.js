import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";
import jstat from "npm:jstat";

// Plot discrete pdf for arbitrary distribution
export function plot_discr_pdf(pdffunc, xgrid, param, quantile, colors, axes = true, {width, height} = {}) {
    const pdfdata = xgrid.map(x => ({x: x, pdf: pdffunc(x, param)}));
    return Plot.plot({
        width,
        height,
        marginTop: 30,
        x: {label: "x", axis: axes},
        y: {label: "P(X=x)", axis: axes},
        marks: [
            Plot.ruleY([0]),
            Plot.barY(pdfdata,{x: "x", y: "pdf", fill: colors[0], strokeWidth: 0, 
            opacity: 1, title: (d) => `P(X=${d.x}) = ${(d.pdf).toPrecision(4)}`}),
            Plot.barY(pdfdata, {filter: d => d.x <= quantile, x: "x", y: "pdf", 
                fill:  colors[1], opacity: 1, 
                title: (d) => `P(X=${d.x}) = ${(d.pdf).toPrecision(4)}`})
        ]
    });
}

// Plot continuous pdf for arbitrary distribution
export function plot_cont_pdf(pdffunc, xgrid, param, quantile, colors, axes = true, {width, height} = {}) {
    const pdfdata = xgrid.map(x => ({x: x, pdf: pdffunc(x, param)}));
    return Plot.plot({
        width,
        height,
        marginTop: 30,
        x: {label: "x", axis: axes},
        y: {label: "f(x)", axis: axes},
        marks: [
            Plot.ruleY([0]),
            //Plot.ruleX([0]),
            Plot.line(pdfdata, {x: "x", y: "pdf", stroke : colors[0], strokeWidth: 2}),
            Plot.areaY(pdfdata, {filter: d => d.x <= quantile, x: "x", y: "pdf", 
            fill: colors[1], opacity: 0.5})
        ]
    });
}

// Plot Poisson pdf
export function plotPoissonPDF(lambda, quantile, axes = true, {width, height} = {}) {
    const param = [lambda]
    let pdffunc = (x, param) => jstat.poisson.pdf(x, param[0])
    const xgrid = d3.range(0, param[0] + 4*Math.sqrt(param[0]), 1)
    const colors = ["pink", "#FF69B4"]
    const plt = plot_discr_pdf(pdffunc, xgrid, param, quantile, colors, axes, 
        {width, height})
    return plt
}

// Plot Binomial pdf
export function plotBinomialPDF(n, p, quantile, axes = true, {width, height} = {}) {
    const param = [n,p]
    let pdffunc = (x, param) => jstat.binomial.pdf(x, param[0], param[1])
    const xgrid = d3.range(0, param[0] + 1, 1)
    const colors = ["orange", "darkorange"]
    const plt = plot_discr_pdf(pdffunc, xgrid, param, quantile, colors, axes, 
        {width, height})
    return plt
}



// Plot Geometric pdf
export function plotGeometricPDF(p, quantile, axes = true, {width, height} = {}) {
    const param = [p]
    let pdffunc = (x, param) => jstat.negbin.pdf(x, 1, param[0])
    const xgrid = d3.range(0, ((1-p)/p) + 3*Math.sqrt(((1-p)/p**2)), 1)
    const colors = ["#B6D0E2", "#6F8FAF"]
    const plt = plot_discr_pdf(pdffunc, xgrid, param, quantile, colors, axes, 
        {width, height})
    return plt
}


// Plot Exponential pdf
export function plotExponPDF(lambda, quantile, axes = true, {width, height} = {}) {
    const param = [lambda]
    let pdffunc = (x, param) => jstat.exponential.pdf(x, param[0])
    const xgrid = d3.range(Number.EPSILON, 5, 0.001)
    const colors = ["pink", "pink"]
    const plt = plot_cont_pdf(pdffunc, xgrid, param, quantile, colors, axes, 
        {width, height})
    return plt
}

// Plot Beta pdf
export function plotBetaPDF(alpha, beta, quantile, axes = true, {width, height} = {}) {
    const param = [alpha, beta]
    let pdffunc = (x, param) => jstat.beta.pdf(x, param[0], param[1])
    const xgrid = d3.range(Number.EPSILON, 1-Number.EPSILON, 0.001)
    const colors = ["cornflowerblue", "cornflowerblue"]
    const plt = plot_cont_pdf(pdffunc, xgrid, param, quantile, colors, axes, 
        {width, height})
    return plt
}

// Plot Cauchy pdf
export function plotCauchyPDF(mu, tau, quantile, axes = true, {width, height} = {}) {
    const param = [mu, tau]
    let pdffunc = (x, param) => jstat.studentt.pdf((x-param[0])/param[1], 1)
    const xgrid = d3.range(-10, 10, 0.01)
    const colors = ["orange", "orange"]
    const plt = plot_cont_pdf(pdffunc, xgrid, param, quantile, colors, axes, 
        {width, height})
    return plt
}

// Plot Chi2 pdf
export function plotChi2PDF(nu, quantile, axes = true, {width, height} = {}) {
    const param = [nu]
    let pdffunc = (x, param) => jstat.chisquare.pdf(x, param[0])
    const xgrid = d3.range(0.01, nu + 5*Math.sqrt(2*nu), 0.01)
    const colors = ["steelblue", "steelblue"]
    const plt = plot_cont_pdf(pdffunc, xgrid, param, quantile, colors, axes, 
        {width, height})
    return plt
}