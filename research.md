---
title: Research
classes:
  - wide
  - fullwidth
  - page-research
---

My research is about turning sequencing data into resources that other people can
use. I work on **deep-ocean multi-omics**, on **plant functional genomics
databases**, and on **epitranscriptomics in reproductive disease** &mdash; three
areas that look unrelated until you notice that all of them are really about
integrating heterogeneous data and making it queryable.

## Deep-ocean multi-omics

### DOO &mdash; Deep Ocean Omics

The deep ocean covers most of the planet and is still largely unexplored. In the
past few years, omics data from deep-sea organisms have grown fast, but they were
scattered across hundreds of supplementary tables and one-off repositories. With
Prof. Pei-Yuan Qian and Prof. Longjun Wu we built **DOO**, a centralised
multi-omics atlas for deep-ocean organisms
([**She** et al., 2026](https://doi.org/10.1093/nar/gkaf1096);
[Nucleic Acids Research](https://doi.org/10.1093/nar/gkaf1096) Database Issue).

DOO currently integrates **68 species across seven phyla and 16 classes**:
72 genomes, 950 bulk transcriptomes, 15 single-cell transcriptomes and 1,112
metagenomes, together with analysis toolkits. For every genome it exposes
assembly statistics, phylogeny, gene annotation, BUSCO completeness, transcription
factors and ubiquitin-family genes, gene clusters, symbiont and mitochondrial
genomes, and fossil records.

**Browse it:** [DeepOceanOmics.org](https://DeepOceanOmics.org)

### Deep-sea adaptation and host&ndash;symbiont evolution

Earlier work in this area looked at adaptation across many deep-sea lineages
rather than one species at a time. Phylogenetic analysis of deep-sea and
shallow-water species put their divergence more than 300 million years ago, and
positive-selection scans pointed at heat-shock proteins, transporter proteins
(ABC and amino-acid transporters) and transmembrane pattern-recognition receptors
as the genes that helped deep-sea organisms recognise and acquire their symbionts
from the surrounding environment.

## Plant functional genomics databases

Crop and medicinal-plant genomics was where I started, and the databases from that
period are still online and still used.

- **TomAP &mdash; tomato multi-omics analysis platform.** Tomato is the second most
  important vegetable crop worldwide and a model for fruit ripening and disease
  resistance, yet the function of most of its genes is unknown. TomAP integrates
  co-expression networks with defined chromatin states so that co-expressed genes
  can be examined together with the chromatin context, and orthologues compared
  across species
  ([Cao, **She** et al., 2024](https://doi.org/10.1016/j.ncrops.2023.10.001)).
  [Launch TomAP](http://bioinformatics.cau.edu.cn/TomAP/)

- **HpeNet &mdash; herbaceous peony co-expression network.** We produced 40 in-house
  RNA-seq datasets from 10 tissues and assembled the transcriptome *de novo*, then
  built a co-expression network database with BLAST, expression profiling and GSEA
  support
  ([Sheng, **She** et al., 2020](https://doi.org/10.3389/fgene.2020.570138)).
  [Launch HpeNet](https://bioinformatics.cau.edu.cn/HpeNet/)

- **croFGD &mdash; *Catharanthus roseus* functional genomics database.** *C. roseus*
  produces monoterpene indole alkaloids derived from secologanin and tryptamine.
  Starting from transcriptomic datasets we built a co-expression network and added
  network search, comparison and analysis, plus gene-family, KEGG, GO and miRNA
  annotation ([**She** et al., 2019](https://doi.org/10.3389/fgene.2019.00238)).
  [Launch croFGD](http://bioinformatics.cau.edu.cn/croFGD/)

- **PNRD &mdash; plant non-coding RNA database, maintenance and upgrade.** Building
  on [PNRD](http://structuralbiology.cau.edu.cn/PNRD/)
  ([Yi et al., 2014](https://doi.org/10.1093/nar/gku1162)), we collected
  **924,127 entries** of 14 ncRNA types from **221 plant species**, extended miRNA
  target predictions to **900,771 pairs** in 57 species, and grew the number of
  miRNA expression profiles to **142** across 47 species.

## Epitranscriptomics in reproductive disease

### m⁶A modification in early pregnancy loss

We performed high-throughput sequencing of villous tissue from first-trimester
spontaneous abortions and from induced-abortion controls, and mapped the
transcriptome-wide m⁶A profile of human villi in early spontaneous abortion.
Joint analysis of MeRIP-seq and RNA-seq data identified candidate genes involved
in the process; we followed up the mechanism through *IGFBP3* (insulin-like growth
factor binding protein) and C/EBP&beta;, a marker of endometrial receptivity
([**She** et al., 2022](https://doi.org/10.3389/fgene.2022.861853)).

### Machine learning for endometriosis diagnosis

Endometriosis is commonly diagnosed late. Combining a random forest with an
artificial neural network, we identified seven differentially expressed genes that
carry diagnostic signal, then validated the model on public datasets
([**She** et al., 2022](https://doi.org/10.3389/fgene.2022.848116)). The model is
a step towards a molecular test that could shorten the diagnostic delay.
