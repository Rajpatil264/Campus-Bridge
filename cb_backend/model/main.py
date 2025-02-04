# main.py
import os
import sys
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import pandas as pd
from user_nlp import process_user_input
from dataset_nlp import process_dataset


def main(input):
    user_tfidf_matrix = (
        process_user_input(input)
    )  # prepares the user question for cosine similarity
    script_dir = os.path.dirname(os.path.abspath(__file__))
    dataset_path = os.path.join(script_dir, 'QADataSet2.csv')
    dataset_tfidf_matrix, _ = process_dataset(dataset_path)

    similarity_scores = cosine_similarity(user_tfidf_matrix, dataset_tfidf_matrix)
    top_indices = np.argsort(similarity_scores[0])[-2:][::-1]

    dataset = pd.read_csv(dataset_path)  # loading the dataset to print the answers

    found_suitable_answer = False
    # print("Most Similar Answers:")
    result_array = []
    for idx in top_indices:
        if similarity_scores[0][idx] > 0.5:
            print(dataset['Answer'][idx])
            result_array.append(dataset['Answer'][idx])
            # print(f"\n{dataset['Answer'][idx]}")

            found_suitable_answer = True
    # print(result_array)

    if not found_suitable_answer:
        print("No suitable answer in the dataset.")


if __name__ == "__main__":
    text_input = sys.argv[1]
    main(text_input)
