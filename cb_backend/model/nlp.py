# nlp_script.py

import sys

def analyze_text(text):
    # Your NLP processing code here
    # Example: Just echoing the input for demonstration
    return f"Processed: {text}"

if __name__ == "__main__":
    text_input = sys.argv[1] if len(sys.argv) > 1 else input("Enter text: ")
    result = analyze_text(text_input)
    print(result)
