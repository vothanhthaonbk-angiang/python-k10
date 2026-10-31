export interface DigitalCompetenceInfo {
  coreCompetencies: string[];
  aiActivity: string;
  samplePrompt: string;
  aiCaution: string;
}

export interface Lesson {
  id: string;
  number: string;
  bookChapter?: string;
  sgkPage?: string;
  title: string;
  subtitle: string;
  level: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  duration: string;
  badgeColor: string;
  topics: string[];
  description: string;
  digitalCompetence?: DigitalCompetenceInfo;
  content: {
    overview: string;
    sections: {
      heading: string;
      explanation: string;
      codeExample?: string;
      outputExample?: string;
      tips?: string;
    }[];
    summary: string[];
  };
  sampleCode: string;
}

export interface TestCase {
  id: number;
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface Exercise {
  id: string;
  title: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Nâng cao';
  category: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  starterCode: string;
  solutionCode: string;
  testCases: TestCase[];
}

export interface QuizQuestion {
  id: number;
  lessonId?: string;
  category?: 'Kiến thức cốt lõi' | 'Năng lực số (NLS)' | 'Ứng dụng AI & Đạo đức số' | 'Đọc hiểu mã lệnh';
  competencyTag?: string;
  question: string;
  codeSnippet?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export interface CodePreset {
  id: string;
  title: string;
  category: string;
  code: string;
  description: string;
}

export interface UserProgress {
  completedLessons: string[];
  completedExercises: string[];
  quizScore: number;
  quizTotal: number;
  studentName: string;
  schoolName: string;
  lastUpdated: string;
}

export interface StudentRegistration {
  id: string;
  fullName: string;
  phoneNumber: string;
  className: string;
  registeredAt: string;
  notes?: string;
}
