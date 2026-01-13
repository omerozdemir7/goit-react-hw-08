Her bileşen için, src/components klasöründe, React bileşeni JSX dosyasını ve stil dosyasını içeren ayrı bir klasör olmalıdır. Klasör adı, bileşen dosyası adı (uzantı .jsx) ve stil dosyası adı (.module.css öncesinde) aynı olmalı ve görevlerde belirtilen adlara uygun olmalıdır (eğer verilmişse).

Her sayfa için src/pages klasöründe, React bileşeni JSX dosyasını ve stil dosyasını içeren ayrı bir klasör olmalıdır. Klasör adı, bileşen dosyası adı (uzantı .jsx) ve stil dosyası adı (.module.css öncesinde) aynı olmalı ve görevlerde belirtilen adlara uygun olmalıdır (eğer verilmişse).

Bileşenlerin dışa aktarılması için (export default) yöntemi tercih edilmelidir.

JS kodu temiz ve anlaşılır olmalıdır, Prettier kullanın.

Redux Toolkit kütüphanesi kullanılarak uygulamayı yapılandırılmalıdır.

Stilizasyon CSS modülleri ile yapılmalıdır.



Kişi Rehberi

"İletişim Kitabı" uygulamasına kullanıcı kayıt ve giriş işlevleri ekleyerek, kullanıcının yalnızca kendi kişisel iletişim listesine erişebilmesini sağlayın.



Backend

Bu görev için hazır bir backend bulunmaktadır ve belgelere sahiptir. Bir önceki ödevde mockapi.io kullanarak oluşturduğunuz backend yerine bunu kullanın.



<https://connections-api.goit.global/>

JWT ile kayıt, giriş ve kullanıcı güncellemelerinin yanı sıra, iletişim listesi işlemleri için gerekli tüm operasyonları destekler.



Redux Dizin Yapısı

Redux içinde üç slice bulunmalıdır. Daha önce yaptığınız contacts ve filters slice'larına ek olarak, kullanıcı durumundan sorumlu olacak yeni bir slice olan auth eklenmelidir. Her slice için işlemler, seçiciler ve slice mantığı gibi varlıklar için ayrı dosyalar oluşturulmalıdır.

Bu şekilde bir yapı oluşturun:







contactsSlice.js, contactsOps.js, filtersSlice.js dosyalarındaki kodları yeni ilgili dosyalara taşıyın.



auth Slice

Redux’a aşağıdaki yapıya sahip yeni bir auth durumu ekleyin:



{

  user: {

    name: null,

    email: null,

  },

  token: null,

  isLoggedIn: false,

  isRefreshing: false,

}



auth Slice Operasyonları

redux/auth/operations.js dosyasına, createAsyncThunk kullanarak kullanıcıyla ilgili işlemleri ekleyin:

register - Yeni bir kullanıcı kaydı için. Temel action tipi "auth/register". RegistrationForm bileşeninde, kayıt sayfasında kullanılır.

login - Mevcut bir kullanıcı için giriş yapma. Temel action tipi "auth/login". LoginForm bileşeninde, giriş sayfasında kullanılır.

logout - Uygulamadan çıkış yapma. Temel action tipi "auth/logout". Uygulamanın üst kısmındaki UserMenubileşeninde kullanılır.

refreshUser - Token ile kullanıcıyı yenileme. Temel action tipi "auth/refresh". App bileşeninin montajı sırasında kullanılır.



Yetkili kullanıcının tokeni persist kütüphanesi yardımıyla yerel depolamada saklanmalıdır.



Yönlendirme

React Router ile yönlendirme ekleyin. Sayfa bileşenlerini src/pages klasörüne ekleyin. Genel ve özel sayfalar için PrivateRoute ve RestrictedRoute bileşenlerini kullanın.



Uygulamanın şu rotalara sahip olması gerekir:

/ - Ana sayfa rotası, uygulama veya geliştirici hakkında bilgi içerebilir. HomePage bileşenini render eder.

/register - Yeni kullanıcı kaydı için genel rota, RegistrationForm formunu içeren RegistrationPage bileşenini render eder.

/login - Mevcut kullanıcı için giriş sayfası, LoginForm formunu içeren LoginPage bileşenini render eder.

/contacts - Kullanıcının iletişim listesiyle çalışabileceği özel rota, ContactsPage bileşenini render eder.



AppBar bileşenini render eden ve tüm rotaları saran bir Layout bileşeni oluşturun, böylece her rotada erişilebilir olur.



AppBar bileşeni, Navigation ve AuthNav bileşenlerini render etmelidir. Giriş yapmış bir kullanıcı AuthNav yerine UserMenu bileşenini görmelidir.



Çıkış yapıldığında iletişim listesini durumdan temizlediğinizden emin olun.



/contacts sayfası yeniden yüklendiğinde, kullanıcının yetkilendirme durumunun korunmasını sağlayın. Kullanıcı tekrar giriş yapmadan yetkilendirilmiş durumu otomatik olarak geri yüklenmelidir.



Formlar

Giriş (LoginForm) ve kayıt (RegistrationForm) formları için Formik kütüphanesini kullanmanız tavsiye edilir.



Ekstra

Bu uygulamanın final sürümüdür; kodu dikkatle ele alın. Uygulamaya eklenebilecek bazı isteğe bağlı özellikler:

İletişim arama kutusuna girilen verilerle yalnızca adlara göre değil, telefon numaralarına göre de filtreleme yapılması.

Silme işlemi için onay modal penceresi.

Başarılı ekleme ve silme işlemleri sırasında React Hot Toast kullanarak kullanıcılara bildirim gösterilmesi.

İletişim bilgileri düzenlenebilir olmalı, backend PATCH isteği destekliyor.

Stilizasyon için Material UI gibi bir bileşen kütüphanesi kullanılabilir.



Kriterler

Fastcheck

Depo var mı kontrol edin.

Depo halka açık mı kontrol edin.

Depoda main.jsx dosyası var mı kontrol edin.

Depoda src/components klasörü var mı kontrol edin.

Depoda src/redux klasörü var mı kontrol edin.

Depoda src/pages klasörü var mı kontrol edin.

vercel.json dosyasını kontrol edin.

src/redux

store.js dosyası mevcut.

redux/auth/operations.js dosyası mevcut.

redux/contacts/operations.js dosyası mevcut.



Error

src/redux

auth/slice.js dosyası mevcut.

filters/slice.js dosyası mevcut.

contacts/slice.js dosyası mevcut.

auth/selectors.js dosyası mevcut.

filters/selectors.js dosyası mevcut.

contacts/selectors.js dosyası mevcut.

pages zorunlu bileşenleri içeriyor:Home.jsx, Login.jsx, Contacts.jsx, Registration.jsx

components şu bileşenleri içeriyor - App AppBar AuthNav LoginForm RegistrationForm ContactForm, Navigaton, ContactList, Contact, UserMenu, PrivateRoute.jsx, RestrictedRoute.jsx, Filter.jsx



main.jsx

Dosyada Provider bileşeni mevcut.

Dosyada PersistGate bileşeni mevcut.

Dosyada BrowserRouter bileşeni mevcut.



store.js

authPersistConfig aşağıdaki yapıya sahip:



const authPersistConfig = {

  key: 'auth',

  storage,

  whitelist: ['token'],

};



Zorunlu olarak bu 3 alan mevcut olmalı, ek alanlar varsa bu bir hata değildir:

authPersistConfig, persistReducer fonksiyonuna bir argüman olarak geçirilir.

persistReducer() fonksiyonu iki argümanla çağrılır.

configureStore metodunun dosyada, uygulama store'u oluşturmak için kullanıldığını kontrol edin.



configureStore({	reducer: {	  contacts: contactsSliceReducer,	  filters: filtersSliceReducer,	  auth: persistReducer(authPersistConfig, authReducer),



	}})



persistReducer() fonksiyonunun sonucu configureStore() içinde auth alanına atanır.

persistStore(store) metodu çağrılır ve export let persistor = persistStore(store) şeklinde dışa aktarılır.



src/redux/contacts/operation.js

axios.defaults.baseURL yapısı mevcut değil.



src/redux/contacts/slice.js

Çıkış yapıldığında kişileri temizlemek için addCase(logOut.fulfilled, () => {}) işlemi mevcut.

selectFilteredContacts seçici fonksiyonu dışa aktarılmıyor.



addCase(logOut.fulfilled, (state) => {

        state.items = [];

        state.error = null;

        state.isLoading = false;

      })



src/redux/contacts/selectors.js

Redux Toolkit'in createSelector ile oluşturulmuş, memoize edilmiş selectFilteredContacts seçicisi mevcut.

İlk argüman olarak [selectContacts, selectNameFilter] değerlerini içeren bir dizi alır.

selectFilteredContacts dışa aktarılıyor.



src/redux/filters/slice.js

selectFilter seçicisi dışa aktarılmıyor



src/redux/filters/selectors.js

selectFilter fonksiyonu oluşturuluyor ve dışa aktarılıyor.



src/redux/auth/operations.js

createAsyncThunk import edilmiş.

HTTP istekleri için axios kullanılıyor.

axios.defaults.baseURL= '<https://connections-api.herokuapp.com>' yapısı mevcut.

createAsyncThunk kullanılarak register işlemi oluşturuluyor.

register işlemi için temel aksiyon türü "auth/register" olarak string tipinde tanımlanmış.

register işleminin asenkron fonksiyonunda bir POST isteği mevcut.

register işleminin asenkron fonksiyonunda try…catch yapısı kullanılıyor.

Hata işlemede catch bloğunda thunkAPI.rejectWithValue çağrısının sonucu dönüyor.

4 operasyon ve yardımcı işlevler oluşturulmalı ve hangi işlevlerin çağrıldığını açıklamalısınız.



src/redux/auth/slice.js

Örnek durumlarla uyumlu durumu kontrol edin.



src/redux/auth/selectors.js

selectIsLoggedIn seçici fonksiyonu mevcut ve dışa aktarılıyor.

selectUser seçici fonksiyonu mevcut ve dışa aktarılıyor.

selectIsRefreshing seçici fonksiyonu mevcut ve dışa aktarılıyor.



pages/Login.jsx

LoginForm bileşeni render ediliyor.



pages/Registration.jsx

RegistrationForm bileşeni render ediliyor.



pages/Contacts.jsx

Bileşende useDispatch hook'u kullanılıyor.

Boş bağımlılık dizisine sahip useEffect hook'unda fetchContacts işlemiyle dispatch çağrısı yapılıyor.

ContactForm, ContactList, Filter bileşenleri render ediliyor.

Ek bileşenlerin olması hata değildir.



components/LoginForm

Herhangi bir prop almıyor. Prop olması kritik bir hata.

useDispatch() metodu çağrılıyor (örnek kod: const dispatch = useDispatch();).

onSubmit() metodunda daha önce atanmış bir değişken kullanılıyor (örneğin, dispatch) ve logIn işlemi çağrılıyor.



components/RegistrationForm

Herhangi bir prop almıyor. Prop olması kritik bir hata.

useDispatch() metodu çağrılıyor.

onSubmit() metodunda dispatch kullanılarak register işlemi çağrılıyor.



components/UserMenu

useSelector metodu kullanılıyor.

useDispatch metodu kullanılıyor.

Kullanıcının adı, useSelector ile alınan verilerle render ediliyor.

Bir buton mevcut ve onClick metodunda logOut işlemiyle dispatch çağrılıyor.



components/AuthNav

NavLink bileşeni import edilmiş.

/register değerine sahip bir NavLink mevcut.

/login değerine sahip bir NavLink mevcut.



components/Navigation

useSelector metodu kullanılarak isLoggedIn alanına erişim sağlanıyor.

/ yoluna sahip bir NavLink bileşeni render ediliyor.

Eğer isLoggedIn true ise /contacts yoluna sahip bir NavLink render ediliyor.



components/AppBar

useSelector metodu kullanılarak isLoggedIn alanına erişim sağlanıyor.

Navigation bileşeni render ediliyor.

isLoggedIn true ise UserMenu bileşeni render ediliyor.

isLoggedIn false ise AuthNav bileşeni render ediliyor.



components/PrivateRoute

{ component: Component, redirectTo = '/' } yapısına sahip prop'lar alır.

useSelector metodu kullanılır.

isLoggedIn ve isRefreshing değerlerine erişilir.

Koşullu render ile redirectTo veya Component render edilir.



components/RestrictedRoute

{ component: Component, redirectTo = '/' } yapısına sahip prop'lar alır.

useSelector metodu kullanılır.

isLoggedIn değerine erişilir.

Koşullu render ile redirectTo veya Component render edilir.



components/Layout

AppBar bileşeni görüntülenir.

{children} prop'u render edilir.



components/App

useDispatch() metodu kullanılır.

useSelector() metodu kullanılarak isRefreshing değeri alınır.

useEffect içinde refreshUser işlemiyle dispatch çağrılır. Bağımlılık dizisinde dispatch kullanılır.

isRefreshing true ise bir placeholder görüntülenir.

isRefreshing false ise Layout bileşeni render edilir.

Layout bileşeni içinde Routes bileşeni render edilir.

Routes bileşeninde şu Route bileşenleri render edilir:

/ yoluna sahip Home bileşeni.

/register yoluna sahip RestrictedRoute bileşeni.



<Route

            path="/register"

            element={

              <RestrictedRoute

                redirectTo="/contacts"

                component={<Registration />}

              />

            }

          />



Route bileşeni, /login değerine sahip path prop ve RestrictedRoute değerine sahip element prop ile oluşturulur



<Route

            path="/login"

            element={

              <RestrictedRoute redirectTo="/contacts" component={<Login />} />

            }

          />



Route bileşeni, path prop değeri /contacts ve element prop değeri PrivateRoute olacak şekilde oluşturulur



<Route

            path="/contacts"

            element={

              <PrivateRoute redirectTo="/login" component={<TasksPage />} />

            }

          />