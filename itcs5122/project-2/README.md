# Project 2 Technical Report

This directory contains the dashboard for this project and the `survey_results_public.csv` file containing the data.

## Audience & Context

This dashboard is for people who want an overview of developers throughout the world, specifically regarding their job satisfation in the type of employment that they are in.

## KPIs Chosen

The measures that I prioritized were the Work Experience, Job Satisfaction rating, Work Location (Remote, in-person, hybrid, etc.), and Age.

## Dashboard Structure

I used three different types of visuals: a map, bar chart, and pie chart. These allow dashboard users to easily see the number of survey responses and job satisfaction by age. It also gives a world view of responses.

## Dataset Origin and Preprocessing

`survey_results_public.csv` originates from [Stack Overflow](https://survey.stackoverflow.co/). All of my preprocessing is done directly within Tableau. There were over 170 fields (columns) in this dataset, I decided to simplify this down to 12. This not only helped with performance of Tableau Public Desktop, it also minimized my scope and allowed me to tell a specific story. The columns I kept are below:

```
ResponseId, Age, EdLevel, Employment, WorkExp, YearsCode, RemoteWork, Country, LanguageHaveWorkedWith, LanguageWantToWorkWith, SOVisitFreq, JobSat
```

These columns relate to the types of data that most people would want to see out of a dashboard relating to developers in the industry.

## Visualization Choices

I wanted primarily hover features to keep the dashboard simple and easy to use. The layout encourages the dashboard user to take their time with each chart and analyze each one individually to build a complete story across all of them. This included moving filters around that would correlate with specific charts.

Users are able to filter by age and work location, and country.

## Reflection

Tableau Public Desktop is not a very well optimized application. I experienced many crashes, some crash outs (on my end since I lost a lot of progress at one point), and some struggles with choosing specific fields to represent the data out of the 170 fields that were originally in the data.

If I had more time, I would explore more with Tableau and attempt to solve the crashing problem. I had a vision and it was more difficult to execute than I thought it would be, so I would try to get closer to that vision if I had the time. I would also include global filtering (e.g. clicking a country would filter across the dashboard).

## Dashboard Access

[Tableau Public](https://public.tableau.com/views/project-2-dashboards/StackOverflowSurveyDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)

There is also a Tableau Workbook file within this folder for local access.

## References

- Perplexity used to research best ways of data cleaning
- Google Gemini used to polish styles of Dashboard page.
- Introduction to Tableau on [DataCamp](https://app.datacamp.com/learn/courses/introduction-to-tableau).
- Stack Overflow Survey data from [Stack Overflow](https://survey.stackoverflow.co/)
