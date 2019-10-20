# Toxic_Comment_Classifier-concetto-19

Toxic Comment Classifier

# Problem Statement
Discussing things you care about can be difficult.

The problem originates from various online platforms, wherein people participate actively and make comments. While this situation contributes significantly to the quality of human life, unfortunately it involves enormous dangers, since online texts with high toxicity
can cause personal attacks, online harassment and bullying
behaviors. A 2014 Pew Report highlights that 73% of adult internet users have seen someone harassed online, and 40% have personally experienced it. The threat of abuse and harassment online means that many people stop expressing themselves and give up on seeking different opinions.
Platforms struggle to effectively facilitate conversations, leading many communities to limit or completely shut down user comments.
      Automatic toxic comment identification and prediction in real time is of paramount importance, since it would allow
the prevention of several adverse effects for internet users.



# Solution Approach

# DataSet- 
  We will be using the DataSet of Wikipedia Talk project available on Figshare. The DataSet consists of a sample of over 100k    comments with human labels for whether the comment contains a personal attack or aggressive tone.

  [Labels - "toxic, severe_toxic, obscene, threat, insult, identity_hate"]
	
Dataset source :- 
		
    ANNOTATED_COMMENTS_URL = 'https://ndownloader.figshare.com/files/7554634' 
		ANNOTATIONS_URL = 'https://ndownloader.figshare.com/files/7554637' 

# Approach -
 The dataset will be preprocessed by using Stemming, Lemmatising, Stop words removal and regex techniques available in NLTK library.
  We will also use Count Vectorizer for converting the string of words into a matrix of words.
	We will build the Multi-label classifier since a particular data can belong to more than one label simultaneously. We will try problem transformation methods like binary relevance method, classifier chain and RAKEL algorithm and Adaptive algorithms like the AdaBoost MH, k-nearest neighbours, Extreme Gradient Boosted (XGboost) decision tree classifier. Advanced Techniques such as stacking and cascading of models will be used for further imporovement of moedls.
  We will use metrics such as Micro and Macro averaged F1 score, Hamming Loss, Log Loss and Accuracy. 
	The model having high precision and high recall will be selected as the final model.
	The final model will be deployed on a dummy forum where it's real time application will be shown.


