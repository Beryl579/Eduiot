// js/data/courseData.js

export const courseData = [
    {
        id: 'mod1',
        title: '1. Fundamental Python',
        desc: 'Mengenal sintaks dasar Python, variabel, dan operasi matematika sederhana untuk Engineer.',
        content: `
            <p class="mb-4">Python adalah bahasa pemrograman yang sangat populer di bidang IoT dan Data Science karena sintaksnya yang mudah dibaca. Mari kita mulai dengan hal paling dasar.</p>
            <ul class="list-disc pl-5 space-y-2 mb-4 text-slate-600">
                <li><strong>Fungsi <code class="bg-gray-100 px-1 rounded text-pink-600">print()</code></strong>: Digunakan untuk menampilkan output ke layar.</li>
                <li><strong>Variabel</strong>: Tempat untuk menyimpan data (misalnya: angka, teks).</li>
                <li><strong>Operasi Matematika</strong>: Penjumlahan (+), Pengurangan (-), Perkalian (*), dan Pembagian (/).</li>
            </ul>
        `,
        code: `# Simulasi perhitungan tegangan\n\n# Deklarasi variabel\narus = 5      # Ampere\nhambatan = 10 # Ohm\n\n# Menghitung tegangan (V = I * R)\ntegangan = arus * hambatan\n\nprint("=== Kalkulator Hukum Ohm ===")\nprint(f"Arus: {arus} A")\nprint(f"Hambatan: {hambatan} Ohm")\nprint(f"Tegangan yang dihasilkan adalah: {tegangan} Volt")`,
        expectedOutput: '=== Kalkulator Hukum Ohm ===\nArus: 5 A\nHambatan: 10 Ohm\nTegangan yang dihasilkan adalah: 50 Volt',
        quiz: {
            question: 'Jika Anda memiliki variabel `V = 220` dan `I = 2`, operasi manakah yang benar untuk mencari Daya (P = V * I)?',
            options: ['P = V + I', 'P = V * I', 'P = V / I', 'P = V - I'],
            correct: 1
        },
        video: {
            title: 'Belajar Python Dasar untuk Pemula',
            channel: 'Kelasoding',
            url: 'https://www.youtube.com/embed/kqtD5dpn9C8' 
        }
    },
    {
        id: 'mod2',
        title: '2. Dasar Teknik Elektro (Hukum Ohm)',
        desc: 'Memahami hubungan antara Tegangan (V), Arus (I), dan Hambatan (R) menggunakan Python.',
        content: `
            <p class="mb-4">Hukum Ohm adalah prinsip paling fundamental dalam Teknik Elektro. Hukum ini menyatakan bahwa arus listrik yang mengalir melalui sebuah konduktor berbanding lurus dengan tegangan dan berbanding terbalik dengan hambatan.</p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p class="font-semibold text-blue-800">Rumus Utama:</p>
                <p class="text-blue-900 font-mono mt-1">V = I × R</p>
                <p class="text-sm text-blue-700 mt-2">V = Tegangan (Volt), I = Arus (Ampere), R = Hambatan (Ohm)</p>
            </div>
        `,
        code: `def hitung_arus(tegangan, hambatan):\n    """Fungsi untuk menghitung arus listrik"""\n    if hambatan == 0:\n        return "Error: Hambatan tidak boleh nol!"\n    return tegangan / hambatan\n\n# Uji coba fungsi\nv = 12 # Volt (Baterai Aki)\nr = 4  # Ohm (Lampu)\n\ni = hitung_arus(v, r)\nprint(f"Arus yang mengalir pada lampu adalah {i} Ampere.")`,
        expectedOutput: 'Arus yang mengalir pada lampu adalah 3.0 Ampere.',
        quiz: {
            question: 'Sebuah perangkat IoT terhubung ke sumber 5V dan memiliki resistansi internal 10 Ohm. Berapa arus yang mengalir?',
            options: ['50 A', '2 A', '0.5 A', '15 A'],
            correct: 2
        },
        video: {
            title: 'Penjelasan Hukum Ohm (Ohm\'s Law Explained)',
            channel: 'EE Basics',
            url: 'https://www.youtube.com/embed/HsLQleZbsGA'
        }
    },
    {
        id: 'mod3',
        title: '3. Python untuk IoT & Sensor',
        desc: 'Simulasi membaca nilai sensor Analog-to-Digital Converter (ADC) dengan Python.',
        content: `
            <p class="mb-4">Perangkat IoT seperti ESP32 membaca data dari alam (seperti suhu atau cahaya) melalui pin Analog. Data ini kemudian diubah menjadi angka digital menggunakan komponen bernama ADC.</p>
            <p class="mb-4">Misalnya, ESP32 memiliki ADC 12-bit, yang berarti nilai digitalnya berkisar dari <strong>0 hingga 4095</strong>.</p>
        `,
        code: `import random\n\ndef baca_sensor_suhu():\n    # Simulasi pembacaan nilai ADC (0-4095)\n    nilai_adc = random.randint(1500, 2500)\n    \n    # Konversi nilai ADC ke Tegangan (3.3V referensi)\n    tegangan_sensor = (nilai_adc / 4095) * 3.3\n    \n    # Asumsi sensor LM35: 10mV = 1 derajat Celcius\n    suhu_celcius = tegangan_sensor * 100\n    \n    return nilai_adc, suhu_celcius\n\nadc, suhu = baca_sensor_suhu()\nprint(f"Data Mentah (ADC): {adc}")\nprint(f"Estimasi Suhu: {suhu:.2f} °C")`,
        expectedOutput: 'Data Mentah (ADC): 2048\nEstimasi Suhu: 16.50 °C \n*(Catatan: Output di atas adalah hasil simulasi. Jika dijalankan berulang, angka bisa berbeda)*',
        quiz: {
            question: 'Berapa rentang nilai maksimal untuk resolusi ADC 12-bit?',
            options: ['255', '1023', '4095', '65535'],
            correct: 2
        },
        video: {
            title: 'Tutorial ESP32 MicroPython Dasar',
            channel: 'IoT Maker',
            url: 'https://www.youtube.com/embed/tB_gE_W2g9M'
        }
    },
    {
        id: 'mod4',
        title: '4. Pengenalan Pandas untuk Data Sensor',
        desc: 'Modul ini mengajarkan cara membaca dan memanipulasi rentetan data sensor menggunakan library Data Science paling populer: Pandas.',
        content: `
            <p class="mb-4">Data sensor yang disimpan terus-menerus biasanya akan masuk ke dalam format tabel seperti Excel atau file CSV. Di Python, ahlinya mengoperasikan tabel adalah <strong>Pandas</strong>.</p>
            <ul class="list-disc pl-5 space-y-2 mb-4 text-slate-600">
                <li><strong>Membaca Data</strong>: Menggunakan <code class="bg-gray-100 px-1 rounded text-pink-600">pd.read_csv('data_suhu.csv')</code>.</li>
                <li><strong>Mencari Rata-rata</strong>: <code class="bg-gray-100 px-1 rounded text-pink-600">df['suhu'].mean()</code>.</li>
            </ul>
        `,
        code: `import pandas as pd\n\n# Simulasi data sensor suhu 1 minggu terakhir\ndata_sensor = {\n    'Hari': ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],\n    'Suhu_C': [28.5, 29.1, 35.0, 30.2, 28.8]\n}\n\ndf = pd.DataFrame(data_sensor)\nprint("Tabel Data Sensor:")\nprint(df)\n\nprint("\\nStatistik Suhu:")\nprint(f"Rata-rata: {df['Suhu_C'].mean()} °C")\nprint(f"Suhu Tertinggi: {df['Suhu_C'].max()} °C (Hati-hati Overheat!)")`,
        expectedOutput: 'Tabel Data Sensor:\n     Hari  Suhu_C\n0   Senin    28.5\n1  Selasa    29.1\n2    Rabu    35.0\n3   Kamis    30.2\n4   Jumat    28.8\n\nStatistik Suhu:\nRata-rata: 30.32 °C\nSuhu Tertinggi: 35.0 °C (Hati-hati Overheat!)',
        quiz: {
            question: 'Fungsi mana yang digunakan Pandas untuk membaca file CSV?',
            options: ['pd.open_csv()', 'pd.read_csv()', 'pd.load()', 'pd.csv_read()'],
            correct: 1
        },
        video: {
            title: 'Pandas Data Science Tutorial in Python',
            channel: 'Programming with Mosh',
            url: 'https://www.youtube.com/embed/e60ItwlZTKM'
        }
    },
    {
        id: 'mod5',
        title: '5. Deteksi Anomali & Filter Data (Applied DS)',
        desc: 'Membersihkan data sensor yang kotor dan tidak masuk akal akibat gangguan transmisi.',
        content: `
            <p class="mb-4">Sensor terkadang mengalami malfungsi atau <strong>noise</strong> sinyal. Misalnya, suhu mendadak terbaca 1000°C. Dalam Data Science, kejadian ini disebut <em>Outlier</em> atau Anomali.</p>
            <p class="mb-4">Salah satu metode paling dasar untuk membersihkan noise secara otomatis di perangkat lunak adalah membatasinya dengan filter secara terprogram (bisa memakai moving average atau manual threshold filter).</p>
        `,
        code: `# Simulasi Filter Sederhana\ndata_mentah = [20, 21, 20, 1000, 22, 21] # 1000 adalah noise/error!\n\ndef filter_anomali(data_array, batas_wajar=50):\n    data_bersih = []\n    for nilai in data_array:\n        if nilai > batas_wajar:\n            print(f"ANOMALI TERDETEKSI: {nilai}. Dibuang!")\n        else:\n            data_bersih.append(nilai)\n    return data_bersih\n\nhasil = filter_anomali(data_mentah)\nprint(f"\\nData Akhir: {hasil}")`,
        expectedOutput: 'ANOMALI TERDETEKSI: 1000. Dibuang!\n\nData Akhir: [20, 21, 20, 22, 21]',
        quiz: {
            question: 'Apa nama istilah dari data yang nilainya sangat melenceng dari batas normal dalam Data Science?',
            options: ['Inlier', 'Noise', 'Outlier', 'String'],
            correct: 2
        },
        video: {
            title: 'What is Anomaly Detection?',
            channel: 'IBM Technology',
            url: 'https://www.youtube.com/embed/12Xq9AjszeE'
        }
    },
    {
        id: 'mod6',
        title: '6. Proyek Akhir: End-to-End IoT Realtime',
        desc: 'Membangun pipeline Data IoT GRATIS menggunakan Wokwi (Sensor Virtual), Firebase, Google Sheets, dan Web Dashboard.',
        content: `
            <p class="mb-4">Pada proyek akhir ini, kita akan merangkai seluruh arsitektur IoT kelas industri secara 100% gratis. Alur datanya adalah:</p>
            <ol class="list-decimal pl-5 space-y-2 mb-4 text-slate-600 font-medium">
                <li><strong>Wokwi (ESP32)</strong> membaca virtual sensor Suhu.</li>
                <li>ESP32 mengirim data via internet ke <strong>Firebase Realtime Database</strong>.</li>
                <li><strong>Google Apps Script</strong> bertugas menarik data dari Firebase dan menyimpannya rapi di <strong>Google Sheets</strong>.</li>
                <li>Sistem website kita akan menarik datanya dari Google Sheets API untuk ditampilkan di Chart!</li>
            </ol>
            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4">
                <p class="font-semibold text-indigo-800">Langkah 1: Setup Firebase</p>
                <p class="text-sm text-indigo-700 mt-1">Buat project di <a href="https://console.firebase.google.com" target="_blank" class="underline font-bold">Firebase Console</a>, buat *Realtime Database* baru dalam Mode Test. Ambil URL Database Anda (contoh: <code>https://eduiot-wokwi-default-rtdb.asia-southeast1.firebasedatabase.app/</code>).</p>
            </div>
            <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4">
                <p class="font-semibold text-emerald-800">Langkah 2: Google Apps Script (GAS)</p>
                <p class="text-sm text-emerald-700 mt-1">Buat Google Sheets baru, klik <code>Extensions > Apps Script</code>. Masukkan kode GAS (lihat terminal di bawah), jalankan dan buat "Trigger" berbasis waktu 1 menit sekali agar data dari Firebase otomatis turun ke Excel.</p>
            </div>
        `,
        code: `# --- KODE 1: WOKWI MICROPYTHON (main.py) ---
import network
import urequests
import dht
import machine
import time

print("Menghubungkan ke WiFi Wokwi...")
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect("Wokwi-GUEST", "")
while not wlan.isconnected():
    pass
print("WiFi Terhubung!")

sensor = dht.DHT22(machine.Pin(15))
# Ganti dengan URL Firebase Anda
FIREBASE_URL = "https://eduiot-wokwi-default-rtdb.asia-southeast1.firebasedatabase.app/sensor.json"

while True:
    sensor.measure()
    suhu = sensor.temperature()
    data = {"suhu": suhu, "timestamp": time.time()}
    
    # Kirim data ke Firebase (Metode PATCH)
    res = urequests.patch(FIREBASE_URL, json=data)
    print(f"Data Terkirim -> Suhu: {suhu}C")
    res.close()
    time.sleep(5)


# ===============================================
# --- KODE 2: GOOGLE APPS SCRIPT (Code.gs) ------
# ===============================================
/*
function ambilDataFirebase() {
  const firebaseUrl = "https://eduiot-wokwi-default-rtdb.asia-southeast1.firebasedatabase.app/sensor.json";
  // Ambil Data JSON
  const response = UrlFetchApp.fetch(firebaseUrl);
  const data = JSON.parse(response.getContentText());
  
  if (data && data.suhu) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const waktuSekarang = new Date();
    // Tulis ke baris baru: [Waktu, Suhu]
    sheet.appendRow([waktuSekarang, data.suhu]);
  }
}
*/`,
        expectedOutput: 'Menghubungkan ke WiFi Wokwi...\nWiFi Terhubung!\nData Terkirim -> Suhu: 24.5C\nData Terkirim -> Suhu: 25.1C\n\n[INFO] Data sukses dicatat ke baris baru di Google Sheets via Trigger Apps Script!',
        quiz: {
            question: 'Dalam arsitektur pipeline data IoT di atas, siapa yang bertindak sebagai jembatan penyimpanan sementara penghubung antara perangkat Hardware (Wokwi/ESP32) dan Software Bisnis (Google Sheets)?',
            options: ['Visual Studio Code', 'Firebase Realtime Database', 'Google Apps Script', 'HTML CSS'],
            correct: 1
        },
        video: {
            title: 'ESP32 Firebase Realtime Database Data Logging',
            channel: 'Rui Santos (Random Nerd Tutorials)',
            url: 'https://www.youtube.com/embed/v9qC9xRtwX8'
        }
    }
];

export const userProfile = {
    name: 'IoT Student',
    initials: 'IS',
    completedModules: ['mod1']
};
