+++
categories = []
date = "2017-06-28T09:52:21-07:00"
tags = []
title = "NantHealth"
url = "/cases/nanthealth/"
type = "cases"
task = "health"
description = "Faster and safer framework to enable effective treatment decisions."
main_image = "/assets/img/cv/case/case-studies-thumbnails/nanthealth-thumbnail.png"
header = ["Faster and safer framework to", "enable effective treatment decisions"]
category = "Healthcare"
about = "NantHealth is a next-generation, evidence-based, personalized healthcare company enabling improved patient outcomes and more effective treatment decisions for critical illnesses. NantHealth‘s unique systems-based approach to personalized healthcare integrates novel diagnostics with large-scale, biometric and phenotypic data to track patient outcomes and deliver precision medicine."
goals = ["Ability to anonymize, tokenize patient data", "Ability to build and run machine learning models on existing data", "Enforced attribute/role based access to patient data", "Users had flexibility to do person on-demand analytics", "Accelerated rollout of the application with regulatory compliance", "Enabled the customers to further research on this data in a safe and secure manner"]
challenges =["Create a light weight ingestion solution", "Implementing Security Framework through encryption"]
solution = "Clairvoyant analysed the existing infrastructure & process and created a multi-tenant Hadoop based solution. We also created lightweight ingestion solution using Streamsets & Kafka. We transformed the data model from MySQL to HDFS. We used the SolrJ API for indexing data to update Solr indexes for implementing search use cases. We used Spark as a processing engine that would read the data from HDFS / Hive and do the computations. We received multi-level data which was provided as input-feed to Solr Ingest process. All the data was segregated in HDFS by customer for querying. We also implemented the security frameworks through encryption zones by customer."
largeimpact1 = "2x"
smallimpact1 = "Accelerated Rollout of Changes"
largeimpact2 = "On-Demand"
smallimpact2 = "Analytics"
largeimpact3 = "50% More"
smallimpact3 = "Flexibility"
testimony = "My experience with Clairvoyant was a success. They did an outstanding job, considering the unique needs of the industry and advancements in the analytic tools and products."
previous = "MD Insider"
previouslink = "mdinsider"
next = "Sensata"
nextlink = "sensata"

headimage = "bidtellect-header.png"
thumbnail = "nanthealth-thumbnail-cs.png"
logos = ["cdh-cloudera-logo.png", "solr-logo.png", "streamsets-logo.png", "kafka-logo.png", "kafka-connect.png"]
solutionimage = "solutions-image-3-min.png"
testimonyimage = "testimonial-3-min.png"
previmage = "md-insider-hero-min.png"
nextimage = "sensata_hero.jpg"
+++