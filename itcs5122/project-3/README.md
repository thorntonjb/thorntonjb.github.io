# Project 3 Technical Report

This directory contains the dashboard for this project and the `survey_results_public.csv` file containing the data.

## Audience & Intent

This dashboard is for people who want an overview of developers throughout the world, specifically regarding their job satisfation in the type of employment that they are in.

### KPIs Chosen

The measures that I prioritized were the Work Experience, Job Satisfaction rating, Work Location (Remote, in-person, hybrid, etc.), and Age.

### Dashboard Structure

I used three different types of visuals: a map, bar chart, and pie chart. These allow dashboard users to easily see the number of survey responses and job satisfaction by age. It also gives a world view of responses.

### Dataset Origin and Preprocessing

`survey_results_public.csv` originates from [Stack Overflow](https://survey.stackoverflow.co/). All of my preprocessing is done directly within Tableau. There were over 170 fields (columns) in this dataset, I decided to simplify this down to 12. This not only helped with performance of Tableau Public Desktop, it also minimized my scope and allowed me to tell a specific story. The columns I kept are below:

```
ResponseId, Age, Employment, WorkExp, YearsCode, RemoteWork, Country, LanguageHaveWorkedWith, LanguageWantToWorkWith, SOVisitFreq, JobSat
```

These columns relate to the types of data that most people would want to see out of a dashboard relating to developers in the industry.

## Dashboard Access

[Tableau Public](https://public.tableau.com/shared/NH3P9NDQH?:display_count=n&:origin=viz_share_link)

There is also a Tableau Workbook file within this folder for local access.

## References

- Perplexity used to research best ways of data cleaning
- Google Gemini used to polish styles of Dashboard page.
- Introduction to Tableau on [DataCamp](https://app.datacamp.com/learn/courses/introduction-to-tableau).
- Stack Overflow Survey data from [Stack Overflow](https://survey.stackoverflow.co/)
