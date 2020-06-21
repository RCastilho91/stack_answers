import pandas as pd
import seaborn as sns
import numpy as np

# creating matrices with random integer values
matrix_of_features = np.random.randint(100, size=(10, 5))
comparison_matrix = np.random.randint(100, size=(10,1))

# converting matrices to dataframes
df_features = pd.DataFrame(matrix_of_features, columns=['a','b','c','d','e'])
df_comparison = pd.DataFrame(comparison_matrix, columns=['x'])

# concatenating dataframes into one
df_full_dataset = pd.concat([df_comparison, df_features], axis=1)

# getting the correlations
factorCorrelation = df_full_dataset.corr()
print(factorCorrelation)

# generating a heatmap for visualization
sns.heatmap(factorCorrelation)