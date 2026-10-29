---
title: Research
lead: >-
  I study how genomes and transcriptomes from poorly characterised organisms
  can be turned into resources that support comparative and functional biology.
---

My work is organised around a single practical question: how do we make
heterogeneous sequencing data useful to people who did not generate them? That
question has taken me from deep-sea animals to crop and medicinal plants, and
from plant immunity to human reproductive disease. In each case the output is
the same kind of object: a curated, searchable resource with the analysis tools
built in.

## Deep-ocean genomics and adaptation

The deep ocean is the largest and least explored habitat on Earth. Organisms
there have evolved under high pressure, permanent darkness and severe nutrient
limitation, and their genomes carry the record of those adaptations. Until
recently, however, deep-sea omics data were scattered across supplementary
tables and one-off repositories.

With Prof. Pei-Yuan Qian and Prof. Longjun Wu, I built **DOO (Deep Ocean
Omics)**, a centralised multi-omics atlas for deep-ocean organisms. DOO
integrates 68 species across seven phyla: 72 genomes, 950 bulk transcriptomes,
15 single-cell transcriptomes and 1,112 metagenomes, together with comparative
and functional analysis toolkits. For each genome it exposes assembly
statistics, phylogeny, gene annotation, BUSCO completeness, transcription
factors, gene clusters, symbiont and mitochondrial genomes, and fossil records.
The resource was published as a first-author paper in the *Nucleic Acids
Research* Database Issue ([She et al., 2026](https://doi.org/10.1093/nar/gkaf1096)).

**CnidoSite** extends the same approach to cnidarians, the lineage that includes
corals, sea anemones and jellyfish. It is a multi-omics database designed to
make genomic and transcriptomic data from this group comparable across species
([She et al., 2026](https://doi.org/10.64898/2026.10.15.758670), preprint).

Earlier work in this area looked at adaptation across deep-sea lineages rather
than one species at a time. Phylogenetic analysis placed the divergence of
deep-sea and shallow-water species more than 300 million years ago, and
positive-selection scans pointed to heat-shock proteins, ABC and amino-acid
transporters, and transmembrane pattern-recognition receptors as genes that
helped deep-sea organisms recognise and acquire symbionts from the surrounding
environment.

## Plant functional genomics

Crop and medicinal-plant genomics is where I started, and the databases from
that period are still online and still used.

- **TomAP** integrates co-expression networks with defined chromatin states, so
  that co-expressed tomato genes can be examined together with their chromatin
  context and compared with orthologues in other species
  ([Cao, She et al., 2024](https://doi.org/10.1016/j.ncrops.2023.10.001)).
- **HpeNet** is a co-expression network database for herbaceous peony, built
  from 40 in-house RNA-seq datasets across 10 tissues and a *de novo*
  transcriptome assembly ([Sheng, She et al., 2020](https://doi.org/10.3389/fgene.2020.570138)).
- **croFGD** is a functional genomics database for *Catharanthus roseus*, the
  source of monoterpene indole alkaloids. It combines a co-expression network
  with network search, gene-family, KEGG, GO and miRNA annotation
  ([She et al., 2019](https://doi.org/10.3389/fgene.2019.00238)).
- **PNRD**, the plant non-coding RNA database, was upgraded to 924,127 entries
  of 14 ncRNA types from 221 species, with miRNA target predictions extended to
  900,771 pairs in 57 species.
- **WheatCENet** and **AppleMDO** apply the same co-expression framework to
  allohexaploid wheat and apple, respectively.

## Epitranscriptomics and reproductive disease

In parallel, I have worked on the molecular basis of reproductive disorders,
where the same data-integration problem appears in a clinical setting.

We mapped the transcriptome-wide m<sup>6</sup>A profile of human villi in first-trimester
spontaneous abortion using MeRIP-seq and RNA-seq, and followed up candidate
genes through *IGFBP3* and C/EBPβ, a marker of endometrial receptivity
([She et al., 2022](https://doi.org/10.3389/fgene.2022.861853)). In
endometriosis, we combined a random forest with an artificial neural network to
identify seven differentially expressed genes with diagnostic signal, and
validated the model on public datasets
([She et al., 2022](https://doi.org/10.3389/fgene.2022.848116)). Related work
includes prognostic lncRNA models for endometrial cancer and the role of FKBP38
in premature ovarian insufficiency through mTOR signalling.

## Databases that outlive the paper

A paper describes a result once; a database keeps answering questions for years.
I build resources so that a biologist with no programming background can get an
answer without emailing me first. In practice this means reproducible pipelines,
documented interfaces, stable identifiers and versioned releases. It is the
unglamorous half of the work, and the half that determines whether a resource is
still useful five years later.
