<!-- <div class='tableauPlaceholder' id='viz1760582141081' style='position: relative'><noscript><a href='#'><img alt='Stack Overflow Survey Dashboard ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;pr&#47;project-2-dashboards&#47;StackOverflowSurveyDashboard&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='project-2-dashboards&#47;StackOverflowSurveyDashboard' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;pr&#47;project-2-dashboards&#47;StackOverflowSurveyDashboard&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1760582141081');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.minWidth='420px';vizElement.style.maxWidth='650px';vizElement.style.width='100%';vizElement.style.minHeight='587px';vizElement.style.maxHeight='887px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.minWidth='420px';vizElement.style.maxWidth='650px';vizElement.style.width='100%';vizElement.style.minHeight='587px';vizElement.style.maxHeight='887px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else { vizElement.style.width='100%';vizElement.style.height='1227px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> -->

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

## Reflection

Tableau Public Desktop is not a very well optimized application. I experienced many crashes, some crash outs (on my end since I lost a lot of progress at one point), and some struggles with choosing specific fields to represent the data out of the 170 fields that were originally in the data.

If I had more time, I would explore more with Tableau and attempt to solve the crashing problem. I had a vision and it was more difficult to execute than I thought it would be, so I would try to get closer to that vision if I had the time.

## Dashboard Access

[Tableau Public](https://public.tableau.com/views/project-2-dashboards/StackOverflowSurveyDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)

There is also a Tableau Workbook file within this folder for local access.

## References

- Perplexity used to research best ways of data cleaning
- Google Gemini used to polish styles of Dashboard page.
- Introduction to Tableau on [DataCamp](https://app.datacamp.com/learn/courses/introduction-to-tableau).
- Stack Overflow Survey data from [Stack Overflow](https://survey.stackoverflow.co/)
