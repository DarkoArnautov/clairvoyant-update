+++
categories = []
date = "2017-06-28T09:52:21-07:00"
tags = []
title = "Blue Pearl"
url = "/cases/bpv/"
type = "cases"
task = "health"
description = "A modern platform to score physician's performance and optimize healthcare costs."
main_image = "/assets/img/cv/case/case-studies-thumbnails/bluepearl-thumbnail.png"
header = ["Data ingestion from multiple locations", "& datasource types into the data lake."]
category = "Healthcare"
about = "BluePearl Veterinary Partners is a national provider of specialty and emergency veterinary care. Their network of pet hospitals offers advanced specialty services and compassionate care and treat the most critical emergencies. BluePearl recognizes that pets are part of the family. They honor the human-animal bond by providing the very best in advanced medical care for pets – including techniques that were once reserved exclusively for humans."
goals = ["Reduced time to accumulate data from all the tables, from 20 different location and 3 different types of databases into hadoop.", "Made querying faster for all the data in the data lake.", "Configuring data with ease for each location and table.", "Application readiness to handle larger volumes of Data."]
challenges =["Creating a robust data lake with an ingestion pipeline combining data from 20 different data centers and more than 1000 tables imported daily.", "Merging the tables from different types of databases and different schema into the corresponding final table in data lake.", "Processing of each kind of table was being done in a different manner.", "The data received was from different geographical locations, this was required to be maintained accordingly."]
solution = "Clairvoyant maintained the metadata in a MySQL database with all parameters in separate columns to give the ability to configure ingestion for each table and each location with ease. The Sqoop import was configured to read from the database directly and generate the dag (Workflow). Clairvoyant also updated the parameters at column level to import data based on the requirement. Since there were many cases where no specific pattern was present to process and transform the tables, manual changes in metadata was required. To reduce the time of accumulation of data, two airflow worker nodes were kept running in parallel."
largeimpact1 = "4x"
smallimpact1 = "Faster Querying Speed"
largeimpact2 = "On"
smallimpact2 = "Demand Analytics"
largeimpact3 = "50%"
smallimpact3 = "Reduction in Data Processing Time"
testimony = "Clairvoyant eased our work flow and created several new efficiencies."
previous = "Kite Pharma"
previouslink = "kitepharma"
next = "Bidtellect"
nextlink = "bidtellect"

headimage = "bpv-hero-min.png"
thumbnail = "bluepearl-thumbnail-cs.png"
logos = ["airflow-logo.png", "sqoop-logo.png", "hive-logo.png", "cloudera_impala_2013.png", "sql-logo.png"]
solutionimage = "solutions-image-3-min.png"
testimonyimage = "testimonial-1-min.png"
previmage = "kitepharma-hero-min.png"
nextimage = "bidtellect-header.png"
+++