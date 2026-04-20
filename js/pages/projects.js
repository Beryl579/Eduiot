// js/pages/projects.js

export function renderMiniProjects() {
    return `
        <div class="animate-fade-in mb-8">
            <h1 class="text-3xl font-bold text-slate-800">Mini Proyek 🎮</h1>
            <p class="text-slate-500 mt-2">Uji kemampuan logikamu dengan permainan interaktif berbasis simulasi program Python dan pengolahan data.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Game: Tebak Angka -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div class="flex items-center mb-6">
                    <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mr-4 text-xl">
                        <i class="fa-solid fa-dice"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800">Tebak Angka Tegangan</h3>
                        <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Python Logic</p>
                    </div>
                </div>
                <p class="text-slate-600 mb-6 leading-relaxed">Sistem telah membangkitkan nilai tegangan acak antara 1 hingga 50 Volt. Coba tebak angkanya menggunakan logika conditional.</p>
                
                <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-5">
                    <input type="number" id="guess-input" placeholder="Masukkan (1-50)" class="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700">
                    <button id="btn-guess" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-sm shadow-indigo-200 flex justify-center items-center">
                        <i class="fa-solid fa-bolt mr-2"></i> Tebak
                    </button>
                </div>
                <div id="guess-result" class="p-4 rounded-xl bg-slate-50 text-sm font-medium text-slate-500 text-center border border-slate-100 min-h-[52px] flex items-center justify-center transition-all">
                    Menunggu inputan dari Anda...
                </div>
                
                <div class="mt-8 pt-5 border-t border-slate-100">
                    <p class="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Konsep yang digabungkan:</p>
                    <div class="flex flex-wrap gap-2">
                        <code class="text-xs bg-slate-50 border border-slate-200 text-indigo-600 px-2.5 py-1 rounded-md font-mono">import random</code>
                        <code class="text-xs bg-slate-50 border border-slate-200 text-indigo-600 px-2.5 py-1 rounded-md font-mono">if / elif / else</code>
                    </div>
                </div>
            </div>

            <!-- Simulator: Smart Relay -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div class="flex items-center mb-6">
                    <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mr-4 text-xl">
                        <i class="fa-solid fa-lightbulb"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800">Smart Home Relay</h3>
                        <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">IoT Actuator</p>
                    </div>
                </div>
                <p class="text-slate-600 mb-6 leading-relaxed">Simulasi logika kendali aktuator. Klik tombol toggle ke kanan untuk memutus atau menyambung arus listrik ke lampu.</p>
                
                <div class="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden">
                    <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]"></div>
                    <i id="lamp-icon" class="fa-regular fa-lightbulb text-6xl text-slate-300 mb-8 transition-all duration-500 relative z-10"></i>
                    
                    <label class="relative inline-flex items-center cursor-pointer z-10">
                        <input type="checkbox" id="relay-toggle" class="sr-only peer">
                        <div class="w-16 h-8 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-amber-500 shadow-inner"></div>
                        <span class="ml-4 text-sm font-bold text-slate-700 w-32" id="relay-status">Relay: OFF</span>
                    </label>
                </div>

                <div class="mt-8 pt-5 border-t border-slate-100">
                    <p class="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Konsep IoT yang diterapkan:</p>
                    <code class="text-xs bg-slate-50 border border-slate-200 text-amber-600 px-2.5 py-1 rounded-md font-mono">GPIO.output(pin, HIGH)</code>
                </div>
            </div>

            <!-- Simulator: Data Science Filter -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:col-span-2">
                <div class="flex items-center mb-6">
                    <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mr-4 text-xl">
                        <i class="fa-solid fa-filter"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800">DS Filter: Anomaly Removal</h3>
                        <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Data Science</p>
                    </div>
                </div>
                <p class="text-slate-600 mb-6 leading-relaxed max-w-3xl">Penerapan *Data Preprocessing*. Rentetan angka di bawah adalah simulasi array data sensor yang kotor. Geser slider threshold ke kiri untuk mendeteksi dan membuang anomali (Outlier) tersebut.</p>
                
                <div class="flex flex-col md:flex-row gap-5 items-center bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                    <label class="text-sm font-bold text-slate-700 whitespace-nowrap uppercase tracking-wide">Batas Filter Maksimal:</label>
                    <input type="range" id="threshold-slider" min="20" max="110" value="110" class="w-full flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500 outline-none">
                    <div class="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm min-w-[90px] text-center">
                        <span id="threshold-val" class="font-extrabold text-slate-800 text-lg">110°C</span>
                    </div>
                </div>
                
                <div class="p-6 border-2 border-dashed border-slate-200 rounded-xl bg-white">
                    <p class="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-widest">Dataset Simulasi:</p>
                    <div class="flex flex-wrap gap-3" id="data-points-container">
                        <!-- Points injected via JS -->
                    </div>
                </div>

                <div class="mt-8 pt-5 border-t border-slate-100">
                    <p class="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Penerapan Pandas Analytics:</p>
                    <code class="text-xs bg-slate-50 border border-slate-200 text-emerald-600 px-2.5 py-1 rounded-md font-mono">df_bersih = df[df['suhu'] <= batas]</code>
                </div>
            </div>

        </div>
    `;
}

// Game State Variables
let targetVoltage = 0;
const noisyData = [28, 29, 30, 95, 27, 28, 88, 29, 30, 31, 100, 28, 29, 27];

export function initProjects() {
    // 1. Init Guess Game
    targetVoltage = Math.floor(Math.random() * 50) + 1;
    const btnGuess = document.getElementById('btn-guess');
    if(btnGuess) btnGuess.addEventListener('click', playGuessGame);

    // 2. Init Relay
    const toggle = document.getElementById('relay-toggle');
    if(toggle) toggle.addEventListener('change', (e) => toggleRelay(e.target));

    // 3. Init Data Filter
    const slider = document.getElementById('threshold-slider');
    if(slider) {
        slider.addEventListener('input', (e) => updateFilter(e.target.value));
        updateFilter(slider.value); // Initial render
    }
}

function playGuessGame() {
    const input = document.getElementById('guess-input').value;
    const resultBox = document.getElementById('guess-result');
    
    if (!input || input < 1 || input > 50) {
        resultBox.innerHTML = '<span class="text-amber-600 font-semibold"><i class="fa-solid fa-triangle-exclamation mr-2"></i>Masukkan angka valid antara 1 - 50!</span>';
        resultBox.className = "p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm font-medium text-center transition-all min-h-[52px] flex items-center justify-center";
        return;
    }

    const guess = parseInt(input);
    if (guess === targetVoltage) {
        resultBox.innerHTML = '<span class="text-emerald-700 font-bold"><i class="fa-solid fa-party-horn mr-2 text-lg"></i>Tepat Sekali! Target adalah ' + targetVoltage + 'V.</span>';
        resultBox.className = "p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-sm font-medium text-center transition-all min-h-[52px] flex items-center justify-center shadow-inner font-bold transform scale-[1.02]";
        // Reset game after delay
        targetVoltage = Math.floor(Math.random() * 50) + 1;
        document.getElementById('guess-input').value = '';
    } else if (guess < targetVoltage) {
        resultBox.innerHTML = '<span class="text-blue-700 font-semibold"><i class="fa-solid fa-arrow-up mr-2"></i>Terlalu rendah. Naikkan tegangan!</span>';
        resultBox.className = "p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm text-center transition-all min-h-[52px] flex items-center justify-center";
    } else {
        resultBox.innerHTML = '<span class="text-rose-700 font-semibold"><i class="fa-solid fa-arrow-down mr-2"></i>Terlalu tinggi. Turunkan tegangan!</span>';
        resultBox.className = "p-4 rounded-xl bg-rose-50 border border-rose-200 text-sm text-center transition-all min-h-[52px] flex items-center justify-center";
    }
}

function toggleRelay(checkbox) {
    const lamp = document.getElementById('lamp-icon');
    const status = document.getElementById('relay-status');
    
    if (checkbox.checked) {
        lamp.classList.remove('fa-regular', 'text-slate-300');
        lamp.classList.add('fa-solid', 'text-amber-400');
        lamp.style.filter = "drop-shadow(0 0 25px rgba(251, 191, 36, 0.7))";
        status.innerHTML = 'Relay: <span class="text-amber-600">ON</span>';
    } else {
        lamp.classList.remove('fa-solid', 'text-amber-400');
        lamp.classList.add('fa-regular', 'text-slate-300');
        lamp.style.filter = "none";
        status.innerHTML = 'Relay: <span class="text-slate-500">OFF</span>';
    }
}

function updateFilter(threshold) {
    const valLabel = document.getElementById('threshold-val');
    if(valLabel) valLabel.textContent = threshold + '°C';
    
    const container = document.getElementById('data-points-container');
    if(!container) return;
    
    let html = '';
    noisyData.forEach(val => {
        if(val > threshold) {
            // Anomaly logic applied visually
            html += `<span class="px-4 py-2 bg-rose-100 text-rose-700 line-through rounded-lg text-sm font-bold shadow-sm border border-rose-200 transition-all opacity-60 scale-95" title="Dianggap Anomali (Dibuang)">${val}°C</span>`;
        } else {
            // Valid data point
            html += `<span class="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-bold shadow-sm border border-emerald-200 transition-all scale-100" title="Data Bersih">${val}°C</span>`;
        }
    });
    container.innerHTML = html;
}
