const formatData =(questionData)=>{
    
    const result = questionData.map((item)=>{
        const questionObject = {question : item.question};
        const AnswerList = [... item.incorrect_answers];
        const correctAnswerIndex = Math.floor(Math.random()*4);
        AnswerList.splice(correctAnswerIndex ,0 , item.correct_answer );
        questionObject.Answers = AnswerList;
        questionObject.correctAnswer =  correctAnswerIndex;
        return questionObject;


    });

    return result;
};

export default formatData;