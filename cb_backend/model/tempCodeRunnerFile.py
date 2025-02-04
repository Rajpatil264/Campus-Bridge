# main.py

from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import pandas as pd
from user_nlp import process_user_input
from dataset_nlp import process_dataset


def main():
    # Process user input
    user_tfidf_matrix = process_user_input()

    dataset_path = "QADataSet2.csv"
    dataset_tfidf_matrix, _ = process_dataset(dataset_path)

    # Calculate cosine similarity
    similarity_scores = cosine_similarity(user_tfidf_matrix, dataset_tfidf_matrix)

    # Get the indices of the two most similar answers
    top_indices = np.argsort(similarity_scores[0])[-2:][::-1]

    dataset = pd.read_csv(dataset_path)

    # Flag to check if at least one suitable answer is found
    found_suitable_answer = False
    print("Most Similar Answers:")
    for idx in top_indices:
        if similarity_scores[0][idx] > 0:
            print(
                "========================================================================="
            )
            print(f"\t\tAnswer {idx}, Similarity Score: {similarity_scores[0][idx]}")
            print(f"\n{dataset['Answer'][idx]}")
            print(
                "========================================================================="
            )

            found_suitable_answer = True

    if not found_suitable_answer:
        print("No suitable answer in the dataset.")


if __name__ == "__main__":
    main()
