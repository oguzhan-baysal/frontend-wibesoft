Frontend Developer Teknik Değerlendirme Görevi














Bu doküman, Wibesoft Yazılım tarafından yürütülen işe alım sürecinde adayların frontend geliştirme yetkinliklerini değerlendirmek amacıyla hazırlanmıştır. Görev, adayın teknik yaklaşımını, kod kalitesini ve kullanıcı deneyimine bakışını ölçmeyi hedeflemektedir. 

Görev Tanımı

Bu teknik değerlendirme kapsamında adaydan, temel bir Ürün Listeleme ve Ürün Detay arayüzü geliştirmesi beklenmektedir.

Görevin amacı; adayın frontend geliştirme yaklaşımını, bileşen yapısını, veriyle çalışma şeklini ve verilen tasarıma uyumunu değerlendirmektir.

Geliştirilecek çalışma, gerçek hayatta karşılaşılabilecek basit bir senaryoyu temsil etmekte olup; adaydan temiz, okunabilir ve sürdürülebilir bir kod yapısı oluşturması beklenmektedir.

Odak noktası; teknik yaklaşım, kod kalitesi ve verilen Figma tasarımına görsel uyumdur.

Bu görev kapsamında web veya mobil platformlardan yalnızca biri için geliştirme yapılması yeterlidir.

Web ve mobil uygulamanın birlikte geliştirilmesi beklenmemektedir.







Beklenen Ekranlar ve Özellikler




● Ürün Listeleme Ekranı
○ Verilen API üzerinden ürün listesinin çekilmesi
○ Veri yüklenirken kullanıcıya uygun bir loading durumu gösterilmesi ○ Olası hata durumları için temel hata yönetimi
○ Her ürün için:
■ Ürün Görseli ■ Ürün Adı
■ Fiyat bilgisi ● Ürün Detay Ekranı
○ Seçilen ürüne ait:
■ Ürün görseli ■ Açıklama
■ Fiyat bilgisi
○ “Sepete ekle” butonu ile ürünün sepete eklenmesi ● Sepet Ekranı
○ Sepete eklenen ürünlerin listelenmesi ○ Her ürün için:
■ Ürün adı 

■ Adet bilgisi ■ Fiyat
○ Toplam tutarın gösterilmesi
○ Sepetten ürün çıkarma veya adet güncelleme(Basit bir state yönetimi yeterlidir)



Veri Kaynağı

Uygulama verileri için aşşağıda verdiğimiz verileri kullanabilirsiniz, tasarımda olan ama apide olmayan verileri rastgele girebilirsiniz.

● https://fakestoreapi.com/docs
● https://fakestoreapi.com/docs-data




Tasarım Kaynağı

Uygulama tasarımı için referans olarak aşağıdaki Figma linki kullanılmalıdır:

https://www.figma.com/design/Zr5KLBmfZQeV0goyFG9gmy/E-commerce-Website-Template –Freebie—Community-?node-id=0-1&t=TPzT7NNxwczvmZOT-1

Adayın, bu tasarıma birebir uygun bir kullanıcı arayüzü oluşturması beklenmektedir.

Tasarımda

● Renk Paleti ● Grid Yapısı
● Boşluklar(margins,paddings) ● Tipografi ve buton stilleri

gibi detaylara dikkat edilmelidir.


Tasarım ve Görsel Kurallar

● Uygulama, paylaşılan Figma tasarımı referans alınarak geliştirilmelidir. ● Tasarıma birebir kopyalama zorunlu değildir; ancak:
○ Genel layout ○ Renk paleti ○ Tipografi
○ Boşluklar (spacing)
● Figma ile görsel olarak tutarlı olmalıdır.
● Responsive (mobil uyumlu) yapı beklenmektedir. ● UI geliştirmede Tailwind CSS kullanılmalıdır. 

● Kullanıcı deneyimi ve okunabilirlik ön planda tutulmalıdır.





















Kullanılması Beklenen Kütüphaneler

Bu görev kapsamında adaydan, aşağıdaki kütüphaneleri kullanarak geliştirme yapması beklenmektedir:

● React veya Next.js
Web uygulamasının geliştirilmesi için ● React Native
Mobil pozisyonlar için (iOS & Android) ● TypeScript
Tüm projede tip güvenliği sağlamak amacıyla ● TanStack Query (React Query v5)
API istekleri, cache yönetimi ve asenkron veri işlemleri için https://tanstack.com/query/v5/docs/community-resources
● OpenAPI React Query Codegen
API client ve query yapılarını otomatik üretmek amacıyla https://github.com/7nohe/openapi-react-query-codegen
● Zustand
Global state ve sepet yönetimi için ● Tailwind CSS
UI geliştirme ve stil yönetimi için ● Routing
○ Web için: React Router veya Next.js Router ○ Mobil için: Expo Router
● Environment Variables (.env) Ortam bazlı konfigürasyonlar için



Teslim Şekli 

● Çalışma bir GitHub repository üzerinden teslim edilmelidir. ● Repository public veya erişim izni verilmiş private olabilir.
● Repository içerisinde bir README.md dosyası bulunmalıdır. README’de: ○ Projenin nasıl çalıştırılacağı
○ Kullanılan temel teknolojiler
○ Varsayımlar ve eklenen bonus özellikler kısaca açıklanmalıdır. ● Commit geçmişi anlaşılır ve düzenli olmalıdır.










Değerlendirme Kriterleri

Çalışmalar aşağıdaki kriterler doğrultusunda değerlendirilecektir:

● Kod kalitesi ve okunabilirlik
● Bileşen yapısı ve mimari yaklaşım ● State yönetimi kullanımı (Zustand) ● API entegrasyonu ve veri yönetimi ● Tasarıma (Figma) görsel uyum
● Kullanıcı deneyimi ve akışlar


Süre

● Teslim süresi: 7 gün



Amaç; adayın yazılım geliştirme yaklaşımını, kodlama alışkanlıklarını ve problem çözme biçimini değerlendirmektir.


