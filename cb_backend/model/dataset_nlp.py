# dataset_nlp.py
import os
import pandas as pd
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
import joblib

tfidf_vectorizer = TfidfVectorizer()
fitted_tfidf_vectorizer = None


def process_dataset(dataset_path):
    global fitted_tfidf_vectorizer

    dataset = pd.read_csv(dataset_path)

    processed_questions = []
    lemmatizer = WordNetLemmatizer()
    stop_words = set(stopwords.words("english"))

    for question in dataset["Question"]:
        try:
            tokens = word_tokenize(str(question))  # Ensure it's converted to string
        except Exception as e:
            print(f"Error processing question: {question}")
            print(f"Error details: {e}")
            continue

        # Stopword Removal
        filtered_tokens = [word for word in tokens if word.lower() not in stop_words]

        # Lemmatization
        lemmatized_tokens = [lemmatizer.lemmatize(word) for word in filtered_tokens]

        processed_questions.append(" ".join(lemmatized_tokens))

    # Feature Extraction using TF-IDF
    if fitted_tfidf_vectorizer is None:
        fitted_tfidf_vectorizer = tfidf_vectorizer.fit(processed_questions)
        joblib.dump(fitted_tfidf_vectorizer, "fitted_tfidf_vectorizer.pkl")

    fitted_tfidf_vectorizer = joblib.load("fitted_tfidf_vectorizer.pkl")
    tfidf_matrix = fitted_tfidf_vectorizer.transform(processed_questions)
    return tfidf_matrix, fitted_tfidf_vectorizer


# Example usage:
if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    dataset_path = os.path.join(script_dir, 'QADataSet2.csv')
    processed_dataset, fitted_vectorizer = process_dataset(dataset_path)
