// js/pages/module_viewer.js
import { courseData, userProfile } from '../data/courseData.js';

export function renderModuleViewer(modId) {
    const mod = courseData.find(m => m.id === modId);
    if (!mod) return `<p class="text-red-500 text-lg font-bold p-8">Modul tidak ditemukan.</p>`;

    return `
        <!-- Breadcrumb -->
        <div class="mb-6 flex items-center text-sm text-slate-400">
            <a href="#" onclick="window.navigate('modules')" class="hover:text-blue-600 transition-colors font-medium">Modul</a>
            <i class="fa-solid fa-chevron-right mx-3 text-xs"></i>
            <span class="font-semibold text-slate-700">${mod.title}</span>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

            <!-- Header Section -->
            <div class="p-8 md:p-10 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50">
                <h1 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">${mod.title}</h1>
                <div class="prose max-w-none text-slate-600 leading-relaxed text-[15px]">
                    ${mod.content}
                </div>
            </div>

            <!-- Video Pembelajaran Section -->
            <div class="bg-slate-50 p-8 md:p-10 border-b border-slate-100">
                <div class="flex items-center mb-5">
                    <div class="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3">
                        <i class="fa-brands fa-youtube text-lg"></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-800">Video Pembelajaran</h3>
                        <p class="text-sm text-slate-500">${mod.video.title} — ${mod.video.channel}</p>
                    </div>
                </div>
                <div class="video-container shadow-lg border border-slate-200">
                    <iframe src="${mod.video.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <!-- Interactive Code Section -->
            <div class="p-8 md:p-10 border-b border-slate-100">
                <div class="flex items-center justify-between mb-5">
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
                            <i class="fa-brands fa-python text-lg"></i>
                        </div>
                        <h3 class="text-lg font-bold text-slate-800">Contoh Kode Python</h3>
                    </div>
                    <button id="btn-run-${mod.id}" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all hover:shadow-md flex items-center">
                        <i class="fa-solid fa-play mr-2"></i>Jalankan Kode
                    </button>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <!-- Code Editor -->
                    <div class="rounded-xl overflow-hidden border border-slate-700 shadow-md">
                        <div class="bg-slate-800 px-4 py-2.5 flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex space-x-2 mr-4">
                                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span class="text-slate-400 text-xs font-mono">main.py</span>
                            </div>
                            <span class="text-slate-500 text-xs"><i class="fa-solid fa-circle text-emerald-400 mr-1 text-[6px]"></i>Ready</span>
                        </div>
                        <pre class="p-5 bg-[#0f172a] text-[#e2e8f0] font-mono text-sm overflow-x-auto leading-relaxed"><code>${mod.code}</code></pre>
                    </div>
                    
                    <!-- Terminal Output -->
                    <div class="rounded-xl overflow-hidden border border-slate-700 flex flex-col min-h-[250px] shadow-md">
                        <div class="bg-slate-800 px-4 py-2.5 flex items-center">
                            <i class="fa-solid fa-terminal text-slate-500 text-xs mr-2"></i>
                            <span class="text-slate-400 text-xs font-mono">Terminal Output</span>
                        </div>
                        <div id="terminal-output-${mod.id}" class="p-5 bg-[#020617] text-emerald-400 font-mono text-sm flex-1 overflow-y-auto">
                            <span class="text-slate-500 flex items-center"><i class="fa-solid fa-circle-dot mr-2 animate-pulse text-xs"></i>Menunggu eksekusi kode...</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quiz Section -->
            <div class="p-8 md:p-10 bg-gradient-to-br from-blue-50/50 to-indigo-50/30">
                <div class="flex items-center mb-5">
                    <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mr-3">
                        <i class="fa-solid fa-clipboard-question text-lg"></i>
                    </div>
                    <h3 class="text-lg font-bold text-slate-800">Uji Pemahaman</h3>
                </div>
                <div class="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <p class="font-semibold text-slate-800 mb-5 text-[15px]">${mod.quiz.question}</p>
                    <div class="space-y-3" id="quiz-options-${mod.id}">
                        ${mod.quiz.options.map((opt, idx) => `
                            <label class="flex items-center p-3.5 border border-slate-200 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all group">
                                <input type="radio" name="quiz-${mod.id}" value="${idx}" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-3 text-slate-700 group-hover:text-blue-700 transition-colors">${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                    <div class="mt-6 flex flex-wrap justify-between items-center gap-4">
                        <button id="btn-quiz-${mod.id}" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all shadow-sm hover:shadow-md">
                            <i class="fa-solid fa-paper-plane mr-2"></i>Cek Jawaban
                        </button>
                        <span id="quiz-result-${mod.id}" class="text-sm font-bold hidden"></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Footer -->
        <div class="flex justify-between mt-8">
            <button onclick="window.navigate('modules')" class="px-5 py-2.5 border border-slate-200 hover:border-slate-400 text-slate-600 text-sm font-medium rounded-lg transition-colors flex items-center">
                <i class="fa-solid fa-arrow-left mr-2"></i>Kembali ke Silabus
            </button>
        </div>
    `;
}

// Attach event listeners after DOM render
export function initModuleViewer(modId) {
    const mod = courseData.find(m => m.id === modId);
    if (!mod) return;

    // Run code button
    const runBtn = document.getElementById(`btn-run-${mod.id}`);
    if (runBtn) {
        runBtn.addEventListener('click', () => runSimulatedCode(mod));
    }

    // Quiz button
    const quizBtn = document.getElementById(`btn-quiz-${mod.id}`);
    if (quizBtn) {
        quizBtn.addEventListener('click', () => checkQuiz(mod));
    }
}

function runSimulatedCode(mod) {
    const terminal = document.getElementById(`terminal-output-${mod.id}`);
    if (!terminal) return;

    terminal.innerHTML = `<span class="text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-2"></i>Menjalankan script...</span><br/>`;
    
    setTimeout(() => {
        const formattedOutput = mod.expectedOutput.replace(/\n/g, '<br/>');
        terminal.innerHTML += `<span class="text-emerald-300">${formattedOutput}</span><br/><br/><span class="text-blue-400 font-semibold">✓ Program selesai dieksekusi.</span>`;
    }, 800);
}

function checkQuiz(mod) {
    const selected = document.querySelector(`input[name="quiz-${mod.id}"]:checked`);
    const resultSpan = document.getElementById(`quiz-result-${mod.id}`);
    
    resultSpan.classList.remove('hidden', 'text-green-600', 'text-red-600', 'text-amber-600');
    
    if (!selected) {
        resultSpan.textContent = '⚠ Pilih jawaban terlebih dahulu!';
        resultSpan.classList.add('text-amber-600');
        return;
    }

    const isCorrect = parseInt(selected.value) === mod.quiz.correct;
    
    if (isCorrect) {
        resultSpan.innerHTML = '<i class="fa-solid fa-check-circle mr-1"></i> Jawaban Benar! 🎉';
        resultSpan.classList.add('text-green-600');
        
        if (!userProfile.completedModules.includes(mod.id)) {
            userProfile.completedModules.push(mod.id);
        }
    } else {
        resultSpan.innerHTML = '<i class="fa-solid fa-times-circle mr-1"></i> Jawaban Salah, coba lagi.';
        resultSpan.classList.add('text-red-600');
    }
}
