import React, { useState, useEffect } from 'react';
import { SchoolBanner } from './components/SchoolBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LessonsSection } from './components/LessonsSection';
import { IdeLab } from './components/IdeLab';
import { ExercisesSection } from './components/ExercisesSection';
import { QuizSection } from './components/QuizSection';
import { ResourcesSection } from './components/ResourcesSection';
import { CertificateModal } from './components/CertificateModal';
import { RegistrationModal } from './components/RegistrationModal';
import { BackgroundCustomizerModal } from './components/BackgroundCustomizerModal';
import { Footer } from './components/Footer';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { LESSONS_DATA } from './data/lessonsData';
import { EXERCISES_DATA } from './data/exercisesData';
import { StudentRegistration } from './types';
import { DEFAULT_SCHOOL_BANNER_PATH, DEFAULT_SCHOOL_BG_SVG } from './assets/schoolDefaultBg';
import { safeStorage } from './utils/safeStorage';
import { CheckCircle2, Home, ArrowUp } from 'lucide-react';

const DEFAULT_CODE = `name = input("Bạn tên là gì? ")
print(f"Xin chào, {name}!")
print("Chúc bạn học tốt lập trình Python!")`;

export default function App() {
  // Progress states persisted safely
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      return JSON.parse(safeStorage.getItem('pythonEduCompletedLessons') || '[]');
    } catch {
      return [];
    }
  });

  const [completedExercises, setCompletedExercises] = useState<string[]>(() => {
    try {
      return JSON.parse(safeStorage.getItem('pythonEduCompletedExercises') || '[]');
    } catch {
      return [];
    }
  });

  const [quizScore, setQuizScore] = useState<number>(() => {
    try {
      return parseInt(safeStorage.getItem('pythonEduQuizScore') || '0', 10);
    } catch {
      return 0;
    }
  });

  const [quizTotal, setQuizTotal] = useState<number>(() => {
    try {
      return parseInt(safeStorage.getItem('pythonEduQuizTotal') || '10', 10);
    } catch {
      return 10;
    }
  });

  const [studentName, setStudentName] = useState<string>(() => {
    return safeStorage.getItem('pythonEduStudentName') || 'Nguyễn Văn An';
  });

  const [schoolName, setSchoolName] = useState<string>(() => {
    return safeStorage.getItem('pythonEduSchoolName') || 'THPT Nguyễn Bỉnh Khiêm';
  });

  // Student Registrations list persisted safely
  const [registrations, setRegistrations] = useState<StudentRegistration[]>(() => {
    try {
      return JSON.parse(safeStorage.getItem('pythonEduRegistrations') || '[]');
    } catch {
      return [];
    }
  });

  // School Background & Contrast Customization States
  const [backgroundImage, setBackgroundImage] = useState<string>(() => {
    const saved = safeStorage.getItem('pythonEduSchoolBackground');
    if (!saved || saved.startsWith('data:image/svg')) {
      return DEFAULT_SCHOOL_BANNER_PATH;
    }
    return saved;
  });

  const [bgOpacity, setBgOpacity] = useState<number>(() => {
    const val = safeStorage.getItem('pythonEduBgOpacity');
    return val ? parseInt(val, 10) : 75;
  });

  const [bgBlur, setBgBlur] = useState<number>(() => {
    const val = safeStorage.getItem('pythonEduBgBlur');
    return val !== null ? parseInt(val, 10) : 1;
  });

  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return safeStorage.getItem('pythonEduHighContrast') === 'true';
  });

  // IDE current code state
  const [currentCode, setCurrentCode] = useState<string>(DEFAULT_CODE);

  // Modals state
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
  const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState<boolean>(false);
  const [isPwaModalOpen, setIsPwaModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for floating Back to Home button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Persist progress to safeStorage
  useEffect(() => {
    safeStorage.setItem('pythonEduCompletedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    safeStorage.setItem('pythonEduCompletedExercises', JSON.stringify(completedExercises));
  }, [completedExercises]);

  useEffect(() => {
    safeStorage.setItem('pythonEduQuizScore', String(quizScore));
    safeStorage.setItem('pythonEduQuizTotal', String(quizTotal));
  }, [quizScore, quizTotal]);

  useEffect(() => {
    safeStorage.setItem('pythonEduStudentName', studentName);
  }, [studentName]);

  useEffect(() => {
    safeStorage.setItem('pythonEduSchoolName', schoolName);
  }, [schoolName]);

  useEffect(() => {
    safeStorage.setItem('pythonEduRegistrations', JSON.stringify(registrations));
  }, [registrations]);

  // Persist Background & Contrast Settings
  useEffect(() => {
    try {
      safeStorage.setItem('pythonEduSchoolBackground', backgroundImage);
    } catch (e) {
      console.warn('Could not cache full background in safeStorage', e);
    }
  }, [backgroundImage]);

  useEffect(() => {
    safeStorage.setItem('pythonEduBgOpacity', String(bgOpacity));
  }, [bgOpacity]);

  useEffect(() => {
    safeStorage.setItem('pythonEduBgBlur', String(bgBlur));
  }, [bgBlur]);

  useEffect(() => {
    safeStorage.setItem('pythonEduHighContrast', String(highContrast));
  }, [highContrast]);

  // Global Drag & Drop Listener to easily set `hinh truong.jpg` from local disk
  useEffect(() => {
    const handleWindowDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleWindowDrop = (e: DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer?.files?.[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) {
            setBackgroundImage(result);
            setToastMessage(`Đã đặt "${file.name}" làm hình nền trường học! Phông chữ đã được cân chỉnh nổi bật.`);
            setTimeout(() => setToastMessage(null), 4000);
          }
        };
        reader.readAsDataURL(file);
      }
    };

    window.addEventListener('dragover', handleWindowDragOver);
    window.addEventListener('drop', handleWindowDrop);

    return () => {
      window.removeEventListener('dragover', handleWindowDragOver);
      window.removeEventListener('drop', handleWindowDrop);
    };
  }, []);

  // Overall progress calculation
  const totalWeight = LESSONS_DATA.length + EXERCISES_DATA.length + 10;
  const currentEarned = completedLessons.length + completedExercises.length + quizScore;
  const progressPercent = Math.min(100, Math.round((currentEarned / totalWeight) * 100));

  // Handlers for Lessons & Exercises
  const handleToggleCompleteLesson = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
  };

  const handleCompleteExercise = (exerciseId: string) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises((prev) => [...prev, exerciseId]);
    }
  };

  const handleScoreUpdate = (score: number, total: number) => {
    setQuizScore(score);
    setQuizTotal(total);
  };

  const handleResetProgress = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập trên thiết bị này không?')) {
      setCompletedLessons([]);
      setCompletedExercises([]);
      setQuizScore(0);
      localStorage.removeItem('pythonEduCompletedLessons');
      localStorage.removeItem('pythonEduCompletedExercises');
      localStorage.removeItem('pythonEduQuizScore');
    }
  };

  // Handlers for Registration & Excel Export
  const handleAddRegistration = (data: Omit<StudentRegistration, 'id' | 'registeredAt'>) => {
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString('vi-VN')} ${now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`;
    const newReg: StudentRegistration = {
      ...data,
      id: `reg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      registeredAt: formattedDate,
    };
    setRegistrations((prev) => [newReg, ...prev]);
  };

  const handleDeleteRegistration = (id: string) => {
    setRegistrations((prev) => prev.filter((r) => r.id !== id));
  };

  const handleClearAllRegistrations = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách học sinh đã đăng ký không?')) {
      setRegistrations([]);
      localStorage.removeItem('pythonEduRegistrations');
    }
  };

  const handleSelectStudentForApp = (name: string, className: string) => {
    setStudentName(name);
    setSchoolName(`THPT Nguyễn Bỉnh Khiêm (Lớp ${className})`);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoadCodeToLab = (code: string) => {
    setCurrentCode(code);
  };

  const isCustomBg = backgroundImage !== DEFAULT_SCHOOL_BG_SVG;

  return (
    <div className={`min-h-screen flex flex-col text-[#0f294a] relative ${highContrast ? 'font-contrast-boost' : ''}`}>
      {/* Fixed School Background Layer */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          filter: `blur(${bgBlur}px)`,
          transform: 'scale(1.03)',
        }}
        aria-hidden="true"
      />

      {/* Harmonious Semi-Transparent Tint Layer for Optimal Text Readability & Standout Contrast */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-300"
        style={{
          backgroundColor: `rgba(246, 250, 255, ${bgOpacity / 100})`,
          backdropFilter: 'saturate(115%)',
        }}
        aria-hidden="true"
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-16 right-5 z-50 bg-[#0d3d78] text-white px-4 py-3 rounded-xl shadow-2xl border border-sky-400/40 flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Official School Top Banner */}
      <SchoolBanner bannerImage={DEFAULT_SCHOOL_BANNER_PATH} />

      {/* Top Navbar */}
      <Navbar
        progressPercent={progressPercent}
        completedLessonsCount={completedLessons.length}
        totalLessonsCount={LESSONS_DATA.length}
        completedExercisesCount={completedExercises.length}
        totalExercisesCount={EXERCISES_DATA.length}
        registrationCount={registrations.length}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenRegistration={() => setIsRegistrationOpen(true)}
        onOpenBackgroundModal={() => setIsBackgroundModalOpen(true)}
        onOpenInstallApp={() => setIsPwaModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onNavigate={handleNavigate} 
          onOpenInstallApp={() => setIsPwaModalOpen(true)} 
        />

        {/* 17 Lessons from Chủ đề 5 SGK Tin học 10 */}
        <LessonsSection
          completedLessons={completedLessons}
          onToggleCompleteLesson={handleToggleCompleteLesson}
          onResetProgress={handleResetProgress}
          onLoadCodeToLab={handleLoadCodeToLab}
          onNavigateToLab={() => handleNavigate('thuc-hanh')}
          onNavigateHome={() => handleNavigate('trang-chu')}
        />

        {/* Pyodide Online IDE Laboratory & Code Lab 10 */}
        <IdeLab
          currentCode={currentCode}
          onChangeCode={setCurrentCode}
          onNavigateHome={() => handleNavigate('trang-chu')}
        />

        {/* Automated Judging Programming Exercises */}
        <ExercisesSection
          completedExercises={completedExercises}
          onCompleteExercise={handleCompleteExercise}
          onSendCodeToLab={handleLoadCodeToLab}
          onNavigateToLab={() => handleNavigate('thuc-hanh')}
          onNavigateHome={() => handleNavigate('trang-chu')}
        />

        {/* Multiple Choice Quiz Center & Python Quiz Master */}
        <QuizSection
          onScoreUpdate={handleScoreUpdate}
          onOpenCertificate={() => setIsCertificateOpen(true)}
          onNavigateHome={() => handleNavigate('trang-chu')}
        />

        {/* Resources, Cheatsheet & FAQs */}
        <ResourcesSection onNavigateHome={() => handleNavigate('trang-chu')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Home Button */}
      {showScrollTop && (
        <button
          onClick={() => handleNavigate('trang-chu')}
          className="fixed bottom-6 right-6 z-40 bg-[#0d3d78] hover:bg-[#154b8d] text-white p-3 sm:px-4 sm:py-2.5 rounded-full sm:rounded-2xl shadow-2xl border border-sky-400/40 flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group backdrop-blur-sm animate-fadeIn"
          title="Trở về đầu trang chủ"
        >
          <Home className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-xs font-black tracking-wide text-white">
            Về trang chủ
          </span>
          <ArrowUp className="w-3.5 h-3.5 text-sky-300 hidden sm:inline" />
        </button>
      )}

      {/* Background Customizer Modal */}
      <BackgroundCustomizerModal
        isOpen={isBackgroundModalOpen}
        onClose={() => setIsBackgroundModalOpen(false)}
        onGoHome={() => handleNavigate('trang-chu')}
        backgroundImage={backgroundImage}
        onUpdateBackgroundImage={setBackgroundImage}
        bgOpacity={bgOpacity}
        onUpdateBgOpacity={setBgOpacity}
        bgBlur={bgBlur}
        onUpdateBgBlur={setBgBlur}
        highContrast={highContrast}
        onUpdateHighContrast={setHighContrast}
      />

      {/* Student Registration & Excel Export Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        onGoHome={() => handleNavigate('trang-chu')}
        registrations={registrations}
        onAddRegistration={handleAddRegistration}
        onDeleteRegistration={handleDeleteRegistration}
        onClearAllRegistrations={handleClearAllRegistrations}
        onSelectStudentForApp={handleSelectStudentForApp}
      />

      {/* Official Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        onGoHome={() => handleNavigate('trang-chu')}
        studentName={studentName}
        onUpdateStudentName={setStudentName}
        schoolName={schoolName}
        onUpdateSchoolName={setSchoolName}
        completedLessonsCount={completedLessons.length}
        totalLessonsCount={LESSONS_DATA.length}
        completedExercisesCount={completedExercises.length}
        totalExercisesCount={EXERCISES_DATA.length}
        quizScore={quizScore}
        quizTotal={quizTotal}
      />

      {/* PWA Mobile App Install Prompt (iOS & Android) */}
      <PwaInstallPrompt 
        forceOpenModal={isPwaModalOpen} 
        onCloseForceModal={() => setIsPwaModalOpen(false)} 
      />
    </div>
  );
}
