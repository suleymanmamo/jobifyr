# 🤝 Katkı Rehberi / Contribution Guidelines

Bu belge, bu projeye nasıl katkı sağlayabileceğinizi ve birlikte nasıl daha düzenli çalışabileceğimizi açıklamaktadır.  
This document explains how you can contribute to this project and collaborate in an organized way.

---

## 📌 Branch ve İş Akışı / Branching & Workflow

- Ana dal: `main` – Her zaman yayına hazır ve kararlı kod bulunur.  
- Her yeni iş için ayrı branch aç:
  - `feature/<özellik-adı>` – Yeni özellikler için  
  - `fix/<konu>` – Hata düzeltmeleri için  
  - `chore/<konu>` – Teknik görevler ve temizlik işleri

📌 Örnekler / Examples:
feature/cv-parser
fix/form-validation
chore/update-eslint

---

## 📝 Commit Mesajları / Commit Messages

### Şablon / Template:

<tip>: <kısa açıklama>
<boşluk>
Gerekiyorsa detaylı açıklama burada yer alır.


### Tipler / Types:
- `feat`: Yeni bir özellik / New feature
- `fix`: Hata düzeltme / Bug fix
- `chore`: Teknik iş / Setup or maintenance
- `docs`: Dokümantasyon / Documentation only
- `style`: Biçim düzeni / Styling, formatting only
- `refactor`: Kod yapısını iyileştirme / Refactor without behavior change
- `test`: Test ekleme / Adding or updating tests

📌 Örnek / Example:
feat: add CV upload feature

Added file input and validation for PDF resumes.


---

## 🔀 Pull Request Kuralları / Pull Request Rules

- `main` dalına doğrudan commit **atmayın**.  
  Do not commit directly to `main`.
- Her iş için branch açın ve PR gönderin.  
  Create a branch for each task and open a Pull Request.
- Açıklayıcı başlık ve açıklama yazın.  
  Write clear titles and meaningful descriptions.
- PR içinde `Closes #issue-no` şeklinde ilgili issue varsa belirtin.

---

## ✅ Kod Kalitesi / Code Quality

- Linter hatası olmamalı.  
  No linter errors (`npm run lint`)
- Build sorunsuz olmalı.  
  Project must build without error (`npm run build`)
- Testler (varsa) geçmeli.  
  Tests (if any) must pass.

---

## 📂 Önerilen Klasör Yapısı / Recommended Folder Structure

src/
├── components/
├── pages/
├── services/
├── utils/
├── hooks/
├── types/
└── assets/


---

## 🧭 Yol Haritası / Roadmap (Snapshot)

- [ ] CV yükleme ve ayrıştırma / Resume upload & parsing
- [ ] İş ilanı entegrasyonu / Job listing integration
- [ ] Kullanıcı profili / User profile
- [ ] Kaydedilen işler / Saved jobs
- [ ] Filtreleme & sıralama / Filtering & sorting

---

## 📣 İletişim / Contact

Yardım veya katkı sunmak için GitHub Issues veya Pull Request açabilirsiniz.  
You may open an Issue or Pull Request if you want to help or ask questions.

---

Teşekkürler! / Thank you for contributing! 💙
