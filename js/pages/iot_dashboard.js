// js/pages/iot_dashboard.js

let iotInterval = null;
let sensorChart = null;

// Memori Data Science & Konfigurasi
const MAX_HISTORY = 50; 
let historyData = []; // Menyimpan objek: { waktu, suhu, lembab }

export function renderIoTDashboard() {
    return `
        <div class="animate-fade-in mb-8">
            <h1 class="text-3xl font-bold text-slate-800">Live IoT Dashboard 📡</h1>
            <p class="text-slate-500 mt-2">Simulasi data sensor real-time yang diintegrasikan dengan sistem web.</p>
        </div>

        <!-- Sensor Cards -->
        <!-- Sensor Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl shadow-sm border border-orange-100 relative overflow-hidden transition hover:shadow-md">
                <div class="absolute -top-4 -right-2 p-4 opacity-10">
                    <i class="fa-solid fa-temperature-half text-8xl text-orange-600"></i>
                </div>
                <p class="text-sm font-semibold text-orange-600/80 mb-2 tracking-wide uppercase">Sensor Suhu (DHT22)</p>
                <div class="flex items-end mb-3">
                    <h3 class="text-5xl font-extrabold text-slate-800 tracking-tight" id="val-temp">--</h3>
                    <span class="text-xl font-bold text-slate-500 ml-1.5 mb-1.5">°C</span>
                </div>
                <p class="text-xs font-medium text-emerald-600 flex items-center"><i class="fa-solid fa-arrow-up mr-1.5"></i>Realtime Cloud Data</p>
            </div>

            <div class="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-2xl shadow-sm border border-cyan-100 relative overflow-hidden transition hover:shadow-md">
                <div class="absolute -top-4 -right-2 p-4 opacity-10">
                    <i class="fa-solid fa-droplet text-8xl text-cyan-600"></i>
                </div>
                <p class="text-sm font-semibold text-cyan-600/80 mb-2 tracking-wide uppercase">Kelembaban (DHT22)</p>
                <div class="flex items-end mb-3">
                    <h3 class="text-5xl font-extrabold text-slate-800 tracking-tight" id="val-humid">--</h3>
                    <span class="text-xl font-bold text-slate-500 ml-1.5 mb-1.5">%</span>
                </div>
                <p class="text-xs font-medium text-emerald-600 flex items-center"><i class="fa-solid fa-check mr-1.5"></i>Stabil</p>
            </div>
        </div>

        <!-- Chart Area -->
        <div class="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-slate-100 mb-8 overflow-hidden">
            <div class="flex justify-between items-center mb-6">
                <div class="pr-4">
                    <h3 class="text-lg md:text-xl font-bold text-slate-800 mb-1">Visualisasi Data (Data Science)</h3>
                    <p class="text-xs md:text-sm text-slate-500">Memonitor pola data Suhu (Time-Series) secara realtime.</p>
                </div>
                <span class="flex h-3.5 w-3.5 relative shadow-sm rounded-full flex-shrink-0">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
            </div>
            <div class="relative h-64 md:h-80 w-full" style="background-image: radial-gradient(#f1f5f9 1px, transparent 1px); background-size: 20px 20px;">
                <canvas id="sensorChart"></canvas>
            </div>
        </div>

        <!-- Analitik Real-Time -->
        <div class="mb-8">
            <h2 class="text-xl font-bold text-slate-800 mb-4">Analisis Tren Realtime</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <!-- Mean -->
                <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <p class="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Mean (Rata-rata)</p>
                    <div class="flex flex-col space-y-1 mt-2">
                        <div class="flex justify-between items-end">
                            <span class="text-xs text-slate-400">Suhu</span>
                            <div class="text-lg font-bold text-orange-600"><span id="stat-mean-temp">0</span>°</div>
                        </div>
                        <div class="flex justify-between items-end">
                            <span class="text-xs text-slate-400">Lembab</span>
                            <div class="text-lg font-bold text-cyan-600"><span id="stat-mean-hum">0</span>%</div>
                        </div>
                    </div>
                </div>
                
                <!-- Median -->
                <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <p class="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Median (Tengah)</p>
                    <div class="flex flex-col space-y-1 mt-2">
                        <div class="flex justify-between items-end">
                            <span class="text-xs text-slate-400">Suhu</span>
                            <div class="text-lg font-bold text-orange-600"><span id="stat-median-temp">0</span>°</div>
                        </div>
                        <div class="flex justify-between items-end">
                            <span class="text-xs text-slate-400">Lembab</span>
                            <div class="text-lg font-bold text-cyan-600"><span id="stat-median-hum">0</span>%</div>
                        </div>
                    </div>
                </div>

                <!-- Modus -->
                <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm col-span-2 md:col-span-1">
                    <p class="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Modus (Terbanyak)</p>
                    <div class="flex flex-col space-y-1 mt-2">
                        <div class="flex justify-between items-end">
                            <span class="text-xs text-slate-400">Suhu</span>
                            <div class="text-lg font-bold text-orange-600"><span id="stat-mode-temp">0</span>°</div>
                        </div>
                        <div class="flex justify-between items-end">
                            <span class="text-xs text-slate-400">Lembab</span>
                            <div class="text-lg font-bold text-cyan-600"><span id="stat-mode-hum">0</span>%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabel Riwayat Data -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
            <div class="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <h3 class="font-bold text-slate-800">Log Riwayat Sensor</h3>
                <span class="text-xs border text-slate-500 bg-white px-2 py-1 rounded-md">Maks 50 Data</span>
            </div>
            <div class="overflow-x-auto h-64 overflow-y-auto w-full custom-scrollbar">
                <table class="w-full text-left border-collapse min-w-[300px]">
                    <thead class="bg-white sticky top-0 border-b border-slate-100 z-10 hidden md:table-header-group">
                        <tr>
                            <th class="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Waktu Masuk</th>
                            <th class="px-6 py-3 text-xs font-semibold text-orange-500 uppercase text-right">Suhu (°C)</th>
                            <th class="px-6 py-3 text-xs font-semibold text-cyan-500 uppercase text-right">Kelembaban (%)</th>
                        </tr>
                    </thead>
                    <tbody id="history-table-body" class="divide-y divide-slate-100 transition-all text-sm">
                        <!-- Data disuntikkan dari Javascript -->
                        <tr>
                            <td colspan="3" class="px-6 py-8 text-center text-slate-400 italic">Menunggu tarikan data pertama...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

export function initIoTDashboard() {
    const ctx = document.getElementById('sensorChart');
    if(!ctx) return;

    // Check if Chart is loaded globally
    if (typeof Chart === 'undefined') {
        console.error("Chart.js is not loaded.");
        return;
    }

    // Initialize empty chart
    const initialData = Array(20).fill(0).map(() => 25 + Math.random() * 2);
    const labels = Array(20).fill('').map((_, i) => `T-${20-i}s`);

    sensorChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Suhu (°C)',
                data: initialData,
                borderColor: '#4f46e5', // Indigo-600
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#4f46e5'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 0 },
            layout: {
                padding: { top: 10, bottom: 10 }
            },
            scales: {
                y: {
                    min: 20,
                    max: 40,
                    grid: { 
                        color: '#f1f5f9',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#64748b',
                        font: { family: "'Inter', sans-serif" }
                    }
                },
                x: {
                    grid: { display: false, drawBorder: false },
                    ticks: {
                        color: '#94a3b8',
                        font: { family: "'Inter', sans-serif", size: 10 }
                    }
                }
            },
            plugins: { 
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleFont: { family: "'Inter', sans-serif" },
                    bodyFont: { family: "'Inter', sans-serif", size: 14, weight: 'bold' },
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false
                }
            }
        }
    });

    // Tautan Firebase Live Server Anda
    const firebaseAPI = "https://eduiot-wokwi-default-rtdb.asia-southeast1.firebasedatabase.app/sensor.json";

    // Polling data periodik
    iotInterval = setInterval(async () => {
        try {
            // 1. Tarik Data Nyata dari Cloud (Suhu)
            const response = await fetch(firebaseAPI);
            const fbData = await response.json();
            
            let temp = 28.0; 
            let humid = 60.0;
            
            if(fbData) {
                if (fbData.suhu !== undefined) temp = parseFloat(fbData.suhu);
                if (fbData.kelembapan !== undefined) humid = parseFloat(fbData.kelembapan);
            }

            // A. Simpan ke Memori & Kelola Batasan
            const now = new Date();
            const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second:'2-digit' });
            
            historyData.unshift({ time: timeStr, temp: temp, humid: humid }); // Masukkan ke paling awla
            if(historyData.length > MAX_HISTORY) {
                historyData.pop(); // Hapus yang paling tua jika penuh
            }

            // B. Update Angka di UI Kartu Utama HTML
            const tempEl = document.getElementById('val-temp');
            const humidEl = document.getElementById('val-humid');

            if(tempEl) tempEl.textContent = temp.toFixed(1);
            if(humidEl) humidEl.textContent = humid.toFixed(1);

            // C. Suntik Data ke Visualisasi Chart.js
            if(sensorChart) {
                const data = sensorChart.data.datasets[0].data;
                data.push(temp);
                data.shift();
                sensorChart.update();
            }

            // D. Refresh Tabel Riwayat secara DOM
            updateHistoryTable();

            // E. Kalkulasi dan Update Kartu Statistik 
            updateStatistics();
            
        } catch (err) {
            console.error("Koneksi ke Firebase gagal: ", err);
        }

    }, 3000); // Refresh UI chart tiap 3 detik
}

export function clearIoTDashboard() {
    if(iotInterval) {
        clearInterval(iotInterval);
        iotInterval = null;
    }
    if(sensorChart) {
        sensorChart.destroy();
        sensorChart = null;
    }
    historyData = []; // Hapus memori saat keluar halaman
}

// ==========================================
// DATA SCIENCE HELPER FUNCTIONS
// ==========================================

function updateHistoryTable() {
    const tbody = document.getElementById('history-table-body');
    if(!tbody) return;

    if(historyData.length === 0) return;

    let html = '';
    historyData.forEach((row) => {
        html += `
            <tr class="hover:bg-slate-50 transition border-b border-slate-100 last:border-0 md:table-row flex border-b md:border-0 flex-col py-3 md:py-0 px-4 md:px-0">
                <td class="md:px-6 md:py-3 text-slate-500 font-mono text-xs mb-1 md:mb-0"><i class="fa-regular fa-clock mr-1 md:hidden"></i>${row.time}</td>
                <td class="md:px-6 md:py-3 font-semibold text-slate-700 md:text-right flex justify-between md:table-cell"><span class="md:hidden text-slate-400 font-normal">Suhu:</span> ${row.temp.toFixed(1)}°</td>
                <td class="md:px-6 md:py-3 font-semibold text-slate-700 md:text-right flex justify-between md:table-cell mt-1 md:mt-0"><span class="md:hidden text-slate-400 font-normal">Lembab:</span> ${row.humid.toFixed(1)}%</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function updateStatistics() {
    if(historyData.length === 0) return;

    const temps = historyData.map(d => d.temp);
    const humids = historyData.map(d => d.humid);

    // Hitung Temp
    const meanT = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);
    const medianT = calculateMedian(temps).toFixed(1);
    const modeT = calculateMode(temps).toFixed(1);

    // Hitung Humid
    const meanH = (humids.reduce((a, b) => a + b, 0) / humids.length).toFixed(1);
    const medianH = calculateMedian(humids).toFixed(1);
    const modeH = calculateMode(humids).toFixed(1);

    // Injeksi ke DOM (Aman)
    const setHtml = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
    
    setHtml('stat-mean-temp', meanT);
    setHtml('stat-mean-hum', meanH);
    
    setHtml('stat-median-temp', medianT);
    setHtml('stat-median-hum', medianH);
    
    setHtml('stat-mode-temp', modeT);
    setHtml('stat-mode-hum', modeH);
}

function calculateMedian(arr) {
    if(arr.length === 0) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if(sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
}

function calculateMode(arr) {
    if(arr.length === 0) return 0;
    const frequency = {};
    let maxFreq = 0;
    let mode = arr[0];

    for(const val of arr) {
        frequency[val] = (frequency[val] || 0) + 1;
        if(frequency[val] > maxFreq) {
            maxFreq = frequency[val];
            mode = val;
        }
    }
    return mode;
}
