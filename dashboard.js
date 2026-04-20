// js/pages/dashboard.js
import { courseData, userProfile } from '../data/courseData.js';

export function renderDashboard() {
    const totalModules = courseData.length;
    const completed = userProfile.completedModules.length;
    const progress = Math.round((completed / totalModules) * 100);

    return `
        <div class="animate-fade-in mb-8">
            <h1 class="text-3xl font-bold text-slate-800">Selamat datang kembali, ${userProfile.name}! 👋</h1>
            <p class="text-slate-500 mt-2">Lanjutkan perjalanan belajarmu di dunia IoT dan Teknik Elektro.</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center transition hover:shadow-md">
                <div class="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-2xl mr-4">
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                    <p class="text-sm font-medium text-slate-500 mb-1">Progres Belajar</p>
                    <h3 class="text-2xl font-bold text-slate-800">${progress}%</h3>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center transition hover:shadow-md">
                <div class="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-2xl mr-4">
                    <i class="fa-solid fa-check-circle"></i>
                </div>
                <div>
                    <p class="text-sm font-medium text-slate-500 mb-1">Modul Selesai</p>
                    <h3 class="text-2xl font-bold text-slate-800">${completed} / ${totalModules}</h3>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center transition hover:shadow-md">
                <div class="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 text-2xl mr-4">
                    <i class="fa-solid fa-microchip"></i>
                </div>
                <div>
                    <p class="text-sm font-medium text-slate-500 mb-1">Status Proyek</p>
                    <h3 class="text-2xl font-bold text-slate-800">3 Tersedia</h3>
                </div>
            </div>
        </div>

        <!-- Quick Actions / Next Module -->
        <h2 class="text-xl font-bold text-slate-800 mb-4">Lanjutkan Belajar</h2>
        <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col md:flex-row items-center justify-between">
            <div class="flex items-center mb-4 md:mb-0">
                <div class="w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mr-5">
                    <i class="fa-brands fa-python"></i>
                </div>
                <div>
                    <p class="text-sm text-indigo-600 font-semibold mb-1 tracking-wider uppercase">Modul Rekomendasi</p>
                    <h3 class="text-xl font-bold text-slate-800">Dasar Teknik Elektro (Hukum Ohm)</h3>
                </div>
            </div>
            <button onclick="window.navigate('module', 'mod2')" class="wh-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md shadow-blue-500/30">
                Mulai Belajar <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
        </div>
    `;
}
