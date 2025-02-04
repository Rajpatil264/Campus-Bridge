# user_nlp.py
import os
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from spellchecker import SpellChecker
from sklearn.feature_extraction.text import TfidfVectorizer
import nltk
import joblib

tfidf_vectorizer = TfidfVectorizer()
fitted_tfidf_vectorizer = None


def process_user_input(user_input):
    global fitted_tfidf_vectorizer

    if user_input is None:
        user_input = input("Enter your question: ")

    # Spell-checking
    spell = SpellChecker()
    misspelled = spell.unknown(user_input.split())
    corrected_input = " ".join(
        spell.correction(word) if word in misspelled else word
        for word in user_input.split()
    )
    # print("After Spell-checking:", corrected_input)

    # Tokenization
    tokens = word_tokenize(corrected_input)
    # print("After Tokenization:", tokens)

    # Stopword Removal
    stop_words = set(stopwords.words("english"))
    filtered_tokens = [word for word in tokens if word.lower() not in stop_words]
    # print("After Stopword Removal:", filtered_tokens)

    # Lemmatization
    lemmatizer = WordNetLemmatizer()
    lemmatized_tokens = [lemmatizer.lemmatize(word) for word in filtered_tokens]
    # print("After Lemmatization:", lemmatized_tokens)

    # Feature Extraction using TF-IDF
    if fitted_tfidf_vectorizer is None:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(script_dir, 'fitted_tfidf_vectorizer.pkl')
        fitted_tfidf_vectorizer = joblib.load(file_path)

    tfidf_matrix = fitted_tfidf_vectorizer.transform([" ".join(lemmatized_tokens)])

    return tfidf_matrix


# Example usage:
if __name__ == "__main__":
    processed_input = process_user_input()
