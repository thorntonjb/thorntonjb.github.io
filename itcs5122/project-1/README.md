# Project 1 Technical Report

This directory contains the runnable code for this project and the `cali_avocados.csv` file containing the data.

## Dataset Origin and Preprocessing

`cali_avocados.csv` originates from [Kaggle](https://www.kaggle.com/datasets/jarredpriester/california-avocado-production-19802020/data). All of my preprocessing is done in Blocks 1 and 2 of the Notebook. After reading the csv and dropping irrelevant columns in Block 1, Block 2 actually edits the data to easily visualize it.

```
avocados_df.rename(columns=lambda name: name.strip(), inplace=True)
avocados_df['Unit'] = avocados_df['Unit'].apply(lambda unit: "Tons")
avocados_df['Year'] = avocados_df['Year'].apply(lambda year: int(year))
feature_names = avocados_df.columns
print(f'Feature Names: {feature_names.values}')


for feature in feature_names.values :
    avocados_df[feature] = avocados_df[feature].apply(lambda name: str(name).strip())
    avocados_df.replace('', 0, inplace=True)
    avocados_df.replace('San Luis Obisp', 'San Luis Obispo', inplace=True)
    if feature in ['Harvested Acres', 'Yield', 'Production', 'Price P/U', 'Value'] :
        avocados_df[feature] = avocados_df[feature].apply(lambda number: float(number))
```

The code above removes extra whitespace from all columns and rows, makes row data consistent, and fixes some errors present in the data.

## Visualization Choices

Seeing as how 'Year' is the primary column for tracking the data, I used line plots in Seaborn to visualize the Time Series. Seaborn is a very powerful tool, but this data is very simple and does not need complex graphs to show. The line plots are bivariate, and take in an X axis and Y axis.

Color choices for the Yield and Production graphs are simple and the same because they essentially show the same data over time.

With the geographic split graphs, I chose to organize the graphs by County hues. Each line featured shows a different county and is all done by Seaborn. Seaborn also allows the legend to be moved outside of the graph spines, which I did for clarity.

## Reflection

As I was playing around with different graphs, I came to the realization that my data is extremely simple. If I had the capacity to redo this project, I would choose a different dataset that would help me explore other types of graphs/charts.

In the grand scheme of things (and for my first project with visualization), everything worked. The biggest struggles I had were with preprocessing and finding all the little things that were wrong with the original data. Seaborn is intuitive to pick up as a new library and I had little issues getting started with it.

## Code

Running `main.ipynb` in VS Code (with `cali_avocados.csv` in the same directory) under a Python Environment will get you the results that I have found.

## References

- Google Gemini used to polish styles of Portfolio page.
- Intermediate Data Visualization with Seaborn course on [DataCamp](https://app.datacamp.com/learn/courses/intermediate-data-visualization-with-seaborn).
- Avocado data from [Kaggle](https://www.kaggle.com/datasets/jarredpriester/california-avocado-production-19802020/data) 
- [Seaborn docs](https://seaborn.pydata.org/api.html) 
- [Python docs](https://docs.python.org/3/library/index.html) 
