import { useState } from 'react';
import { CheckCircle, AlertTriangle, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "How do you typically refer to yourself in relation to your dog?",
      options: [
        { text: "Dog owner", value: "A" },
        { text: "Dog guardian/caretaker", value: "B" },
        { text: "Dog mom/dad", value: "C" }
      ]
    },
    {
      question: "When your dog has a birthday, you:",
      options: [
        { text: "Don't celebrate dog birthdays", value: "A" },
        { text: "Give them a special treat", value: "B" },
        { text: "Throw a party with cake and decorations", value: "C" }
      ]
    },
    {
      question: "How do you introduce your dog to strangers?",
      options: [
        { text: "This is my dog [name]", value: "A" },
        { text: "This is [name], my companion", value: "B" },
        { text: "This is my son/daughter [name]", value: "C" }
      ]
    },
    {
      question: "Your feelings about matching outfits with your dog:",
      options: [
        { text: "Completely unnecessary", value: "A" },
        { text: "Cute for special occasions", value: "B" },
        { text: "Essential for family photos", value: "C" }
      ]
    },
    {
      question: "When discussing parenthood, you:",
      options: [
        { text: "Only refer to human children as kids", value: "A" },
        { text: "Sometimes jokingly call pets 'kids'", value: "B" },
        { text: "Firmly believe pets are your children", value: "C" }
      ]
    },
    {
      question: "Your reaction to the term 'fur baby':",
      options: [
        { text: "Find it scientifically inaccurate", value: "A" },
        { text: "Use it occasionally in casual conversation", value: "B" },
        { text: "Use it regularly and seriously", value: "C" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResult = () => {
    const counts = { A: 0, B: 0, C: 0 };
    answers.forEach(answer => {
      counts[answer as keyof typeof counts]++;
    });

    if (counts.C >= 4) {
      return {
        level: "Severe CMDD",
        color: "text-alert-red",
        bgColor: "bg-alert-red/10",
        borderColor: "border-alert-red",
        title: "Significant CMDD Symptoms Detected",
        description: "Your responses indicate significant symptoms of Canine Maternal Delusion Disorder. Immediate intervention is recommended.",
        recommendations: [
          "Contact IMCS crisis hotline: 1-800-NOT-A-MOM",
          "Schedule appointment with certified CMDD counselor",
          "Begin Cognitive Reality Therapy (CRT) program",
          "Remove 'dog mom/dad' merchandise from home",
          "Practice species-appropriate terminology daily"
        ]
      };
    } else if (counts.C >= 2 || counts.B >= 4) {
      return {
        level: "Moderate CMDD Risk",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-500",
        title: "Moderate CMDD Risk Identified",
        description: "Your responses suggest developing CMDD symptoms. Early intervention can prevent progression to severe stages.",
        recommendations: [
          "Review educational materials on species boundaries",
          "Practice using 'guardian' instead of 'parent' terminology",
          "Consider joining CMDD support group",
          "Monitor for progression of symptoms",
          "Discuss findings with healthcare provider"
        ]
      };
    } else {
      return {
        level: "No CMDD Detected",
        color: "text-alert-green",
        bgColor: "bg-alert-green/10",
        borderColor: "border-alert-green",
        title: "Healthy Human-Canine Relationship",
        description: "Congratulations! Your responses indicate a healthy, reality-based relationship with your canine companion.",
        recommendations: [
          "Continue maintaining appropriate species boundaries",
          "Share CMDD awareness with others who may need help",
          "Consider volunteering with IMCS educational programs",
          "Stay vigilant for CMDD symptoms in your community",
          "Keep using scientifically accurate terminology"
        ]
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const result = calculateResult();
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-government-blue mb-4">
              <Brain className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Assessment Results
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-government-navy mb-6">
              Your CMDD Assessment
            </h1>
          </div>

          <div className={`clinical-card ${result.bgColor} border-2 ${result.borderColor} mb-8`}>
            <div className="text-center mb-6">
              <h2 className={`text-3xl font-bold ${result.color} mb-2`}>{result.level}</h2>
              <h3 className="text-xl font-semibold text-government-navy mb-4">{result.title}</h3>
              <p className="text-base text-government-gray-dark leading-relaxed">
                {result.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-government-navy mb-4">
                Recommended Next Steps:
              </h3>
              {result.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className={`h-5 w-5 ${result.color} flex-shrink-0 mt-0.5`} />
                  <span className="text-sm text-government-gray-dark">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Result Text */}
          <div className="clinical-card bg-government-navy text-white text-center">
            <h3 className="text-xl font-semibold mb-4">Universal Truth</h3>
            <p className="text-base leading-relaxed mb-4">
              Regardless of your assessment results, remember this fundamental truth:
            </p>
            <blockquote className="text-2xl font-serif italic mb-4">
              "You are not a dog mom. You are a valued dog guardian. 
              Your relationship with your canine companion is meaningful, 
              loving, and important—and it exists beautifully within the 
              reality of appropriate species boundaries."
            </blockquote>
            <p className="text-sm opacity-90">
              — Institute for Maternal Canine Studies Official Position Statement
            </p>
          </div>

          <div className="text-center mt-8">
            <Button onClick={resetQuiz} size="lg" className="mr-4">
              Retake Assessment
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resources">Get Resources</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-government-blue mb-4">
            <Brain className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Clinical Assessment
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-government-navy mb-6">
            CMDD Self-Assessment Quiz
          </h1>
          
          <p className="text-xl text-government-gray leading-relaxed">
            A scientifically-designed questionnaire to assess your risk level for 
            Canine Maternal Delusion Disorder. Results are confidential and for educational purposes only.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-government-gray">Progress</span>
            <span className="text-sm text-government-gray">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-government-gray-light rounded-full h-2">
            <div 
              className="bg-government-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="clinical-card mb-8">
          <h2 className="text-2xl font-semibold text-government-navy mb-6">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="quiz-option w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base text-government-gray-dark">
                    {option.text}
                  </span>
                  <ArrowRight className="h-5 w-5 text-government-gray opacity-50" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-government-gray">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="font-semibold">Medical Disclaimer</span>
          </div>
          <p>
            This assessment is for educational and entertainment purposes only. 
            It is not a substitute for professional medical or psychological evaluation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;