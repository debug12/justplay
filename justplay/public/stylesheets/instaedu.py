#Quizzer Framework
#Objective: Create a review program that randomly selects a term to quiz and then randomly selects multiple choice answers.
#Parts needed:
    ##List of terms and answer
    ##User selects desired amount of questions (all should be an option)
    ##Comp randomly selects a term from list (LIST SCRAMBLER STILL NEEDED)
    ##Assigns four multiple choice answers to it, 1 is the correct, 3 are randomly picked from the pool of all answers. Order is random
    #User able to input answer
    #Comp keep track of all wrong answers
    #Run through n amount of DIFFERENT terms or each term once depending on amount desired
    #User can see percent correct
    #User can see which ones they got wrong
    #User can input a term when not taking a test to see what it is defined as


#import random for generating
import random

#term and definition libraries
terms_ans = {'term1':'answer1','term2':'answer2','term3':'answer3','term4':'answer4','term5':'answer5','term6':'answer6','term7':'answer7','term8':'answer8','term9':'answer9','term10':'answer10','term11':'answer11','term12':'answer12','term13':'answer13','term14':'answer14','term15':'answer15','term16':'answer16','term17':'answer17','term18':'answer18','term19':'answer19','term20':'answer20'}
term_list = ['term1','term2','term3','term4','term5','term6','term7','term8','term9','term10','term11','term12','term13','term14','term15','term16','term17','term18','term19','term20']
answer_list = ['answer1','answer2','answer3','answer4','answer5','answer6','answer7','answer8','answer9','answer10','answer11','answer12','answer13','answer14','answer15','answer16','answer17','answer18','answer19','answer20']

#picks the test questions to ask
def gen_test(amount=len(term_list)):
    found_starter = False
    test_terms = []
    while found_starter == False:
        #pick a random starting point in the terms to see if it is suitable
        start_point = random.randint(1, len(term_list))
        if amount == len(term_list):
            #if user inputs max amount of questions possible, just take the term list
            test_terms = term_list
            found_starter = True
        elif len(term_list) - (start_point + amount) >= 0:
            #if it is suitable, then append the terms to the test questions
            for x in xrange(start_point,start_point+amount):
                test_terms.append(term_list[x])
            found_starter = True
    else:
        return test_terms

#scramble list
def list_scrambler(unscrambled_list):
    test_terms=[]
    countdown = len(unscrambled_list) + 1
    for x in range(1, countdown):
        transfer_var = random.randint(0,len(unscrambled_list)-1)
        test_terms.append(unscrambled_list[transfer_var])
        del unscrambled_list[transfer_var]
    return test_terms

#ask user for amount of questions needed and get the list
user_input = raw_input("Hey ")
user_input_int = int(user_input)
generated_test = gen_test(user_input_int)
test_terms = list_scrambler(generated_test)


def gen_question(picked_term, question_num=1, total_amount=len(test_terms)):
    #print start of question
    print
    print "Question " + str(question_num) + " of " + str(total_amount) + ":"
    print
    print picked_term
    print
    #gather random multiple choice answers they must a) all be different and b) not be the answer
    ans_1_acceptable = False
    while ans_1_acceptable == False:
        int_rand_ans_1 = random.randint(1, len(term_list)) - 1
        if str(term_list[int_rand_ans_1]) != str(picked_term):
            #Term accepted; send to output
            ans_1_acceptable = True
    ans_2_acceptable = False
    while ans_2_acceptable == False:
        int_rand_ans_2 = random.randint(1, len(term_list)) - 1
        if int_rand_ans_2 != int_rand_ans_1 and str(term_list[int_rand_ans_2]) != str(picked_term):
            ans_2_acceptable = True
    ans_3_acceptable = False
    while ans_3_acceptable == False:
        int_rand_ans_3 = random.randint(1, len(term_list)) - 1
        if int_rand_ans_3 != int_rand_ans_1 and int_rand_ans_3 != int_rand_ans_2 and str(term_list[int_rand_ans_3]) != str(picked_term):
            ans_3_acceptable = True
    #Decide if the correct answer is A, B, C, or D
    correct_ans = random.randint(1,4)
    #Print the options using the variables gathered above
    if correct_ans != 1:
        print "A) " + answer_list[int_rand_ans_1]
    else:
        print "A) " + terms_ans[picked_term]
    if correct_ans != 2:
        print "B) " + answer_list[int_rand_ans_2]
    else:
        print "B) " + terms_ans[picked_term]
    if correct_ans != 3:
        print "C) " + answer_list[int_rand_ans_3]
    else:
        print "C) " + terms_ans[picked_term]
    if correct_ans == 1:
        print "D) " + answer_list[int_rand_ans_1]
    elif correct_ans == 2:
        print "D) " + answer_list[int_rand_ans_2]
    elif correct_ans == 3:
        print "D) " + answer_list[int_rand_ans_3]
    else:
        print "D) " + terms_ans[picked_term]

    print
##
##for x in xrange(1, q_amnt):
##    this_q = random.randint(1, len(test_terms))
##    this_q_list.append(test_terms[this_q])
##    del test_terms[this_q]
##    