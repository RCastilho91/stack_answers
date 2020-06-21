https://stackoverflow.com/questions/62501973/save-particular-values-of-a-list-in-a-csv-file

    Result = [('word1','first_sentence',[[20]]),('word1','second_sentence',[[10]]),('word1','third_sentence',[[5]])] [('word2','first_sentence',[[30]]),('word2','second_sentence',[[10]]),('word2','third_sentence',[[5]])] [('word3','first_sentence',[[30]]),('word3','second_sentence',[[20]]),('word3','third_sentence',[[10]])]

I have a large sorted list and here's a simple representation of it, the third field represents the score of the word (first field) with sentences(second field).

For each word, I want to fetch the top 2 sentences with the highest score and save it on a csv, with the first column being the word, the second being the two sentences with the highest score, and the third their scores. Here's what I did :

    row_list = [[result[:3][0], result[:3][:2], result[:3][:2]]]
    with open('list.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerows(row_list)

This returns to me a csv with one line that contains everything. Any help?