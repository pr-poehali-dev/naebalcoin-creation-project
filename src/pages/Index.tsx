import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [miningProgress, setMiningProgress] = useState(0);
  const [balance, setBalance] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showTroll, setShowTroll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isConnected) {
        setMiningProgress(prev => (prev >= 100 ? 0 : prev + 2));
        setEarnings(prev => prev + 0.0001);
        if (miningProgress >= 100) {
          setBalance(prev => prev + 0.001);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isConnected, miningProgress]);

  const handleConnect = () => {
    setIsConnected(!isConnected);
    if (!isConnected) {
      setMiningProgress(0);
    }
  };

  const handleGetMoney = () => {
    setIsLoading(true);
    setShowTroll(false);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowTroll(true);
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <nav className="p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/img/be59726a-8dac-406f-b3c7-b3cc0ab0ea3d.jpg" 
              alt="NaEbalCoin"
              className="w-12 h-12 rounded-full animate-glow"
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent animate-pulse-neon">
              NaEbalCoin
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#mining" className="hover:text-neon-cyan transition-colors">Майнинг</a>
              <a href="#wallet" className="hover:text-neon-cyan transition-colors">Кошелек</a>
            </nav>
            <Button 
              onClick={handleConnect}
              className={`${isConnected 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-gradient-to-r from-neon-cyan to-neon-magenta hover:from-neon-magenta hover:to-neon-cyan'
              } font-semibold`}
            >
              <Icon name="Wallet" className="mr-2" size={16} />
              {isConnected ? 'Подключен' : 'Подключить'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent animate-slide-up">
            Новая криптовалюта
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto animate-slide-up">
            Зарабатывайте деньги за считанные секунды с технологией будущего!
          </p>
          <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 rounded-lg p-6 mb-8 max-w-3xl mx-auto backdrop-blur-sm border border-neon-cyan/30">
            <p className="text-2xl font-bold text-neon-cyan mb-4 animate-pulse-neon">
              Здесь появится твоё будущее!
            </p>
            <p className="text-lg text-gray-200 mb-4">
              Депай деньги и будет всё в масле! NaEbalCoin не обманет вас!
            </p>
            <p className="text-sm text-neon-green font-semibold">
              💎 Гарантированная прибыль • 🚀 Быстрый рост • 💰 Безопасные инвестиции
            </p>
          </div>
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-cyan">$0.45</div>
              <div className="text-gray-400">Цена</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green">+24.5%</div>
              <div className="text-gray-400">24ч</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-magenta">1.2M</div>
              <div className="text-gray-400">Объем</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Section */}
      <section id="mining" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-neon-cyan">
            Майнинг панель
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Cpu" className="text-neon-cyan" size={24} />
                  <span>Статус майнинга</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>Статус:</span>
                  <Badge 
                    variant={isConnected ? "default" : "secondary"}
                    className={isConnected ? "bg-green-600" : "bg-gray-600"}
                  >
                    {isConnected ? 'Активен' : 'Остановлен'}
                  </Badge>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Прогресс:</span>
                    <span>{miningProgress.toFixed(1)}%</span>
                  </div>
                  <Progress value={miningProgress} className="h-3" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Хешрейт:</span>
                    <div className="text-neon-cyan font-semibold">
                      {isConnected ? '2.5 MH/s' : '0 MH/s'}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Температура:</span>
                    <div className="text-neon-green font-semibold">
                      {isConnected ? '65°C' : '25°C'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="TrendingUp" className="text-neon-magenta" size={24} />
                  <span>Доходы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-cyan mb-2">
                    {earnings.toFixed(6)} NEC
                  </div>
                  <div className="text-gray-400">Заработано сегодня</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-neon-green font-semibold">0.001 NEC</div>
                    <div className="text-gray-400">В час</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-green font-semibold">0.024 NEC</div>
                    <div className="text-gray-400">В день</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-green font-semibold">0.168 NEC</div>
                    <div className="text-gray-400">В неделю</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      <section id="wallet" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-neon-magenta">
            Кошелек
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-800/80 to-purple-900/30 border-gray-700 backdrop-blur-sm lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Wallet" className="text-neon-cyan" size={24} />
                  <span>Баланс кошелька</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-neon-cyan mb-2">
                    {balance.toFixed(6)}
                  </div>
                  <div className="text-gray-400 text-lg">NaEbalCoin (NEC)</div>
                  <div className="text-2xl text-neon-green mt-2">
                    ≈ ${(balance * 0.45).toFixed(4)} USD
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="flex-1 bg-neon-cyan text-black hover:bg-neon-cyan/80">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить
                  </Button>
                  <Button 
                    className="flex-1 bg-neon-magenta hover:bg-neon-magenta/80"
                    onClick={handleGetMoney}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
                        Загрузка денег...
                      </>
                    ) : (
                      <>
                        <Icon name="Download" className="mr-2" size={16} />
                        Получить
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Clock" className="text-neon-green" size={24} />
                  <span>Последние операции</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <div className="font-semibold text-neon-green">+0.001 NEC</div>
                      <div className="text-gray-400">Майнинг</div>
                    </div>
                    <div className="text-gray-400">2 мин назад</div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <div className="font-semibold text-neon-green">+0.001 NEC</div>
                      <div className="text-gray-400">Майнинг</div>
                    </div>
                    <div className="text-gray-400">4 мин назад</div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <div className="font-semibold text-neon-green">+0.001 NEC</div>
                      <div className="text-gray-400">Майнинг</div>
                    </div>
                    <div className="text-gray-400">6 мин назад</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Troll Modal */}
      {showTroll && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-red-900 to-red-700 rounded-lg p-8 max-w-2xl mx-auto border-4 border-red-500 animate-bounce">
            <div className="text-center">
              <div className="text-6xl mb-4">😈</div>
              <h2 className="text-3xl font-bold text-red-100 mb-6">
                ТРОЛЛИНГ ОТ ВЛАДА! 🤣
              </h2>
              <div className="text-lg text-red-100 leading-relaxed mb-6 text-left bg-red-800/50 p-4 rounded">
                <p className="mb-3">
                  Здравствуй дорогой пользователь, ты думаешь что реально бы получил бы деньги?...
                </p>
                <p className="mb-3 text-2xl font-bold text-yellow-300">
                  АХАХАХАХ НУ ТЫ И ЛОХ ТУПОРЫЛЫЙ!
                </p>
                <p className="mb-3">
                  КАК МОЖНО ПОВЕРИТЬ ЭТОЙ БРЕХНЕ?! Я САМ В КРИПТЕ НИЧЕГО НЕ ПОНИМАЮ И НЕ ПОНИМАТЬ НЕ ХОЧУ,
                </p>
                <p className="mb-3 text-xl font-bold text-orange-300">
                  ТЫ ПОПАЛСЯ НА ТРОЛЛИНГ ОТ ВЛАДА АХАХАХАХ!
                </p>
                <p>
                  Да я даже в жизни не буду создавать эту крипту, никогда и я не отсталый, я не верю в крипту...
                </p>
              </div>
              <Button 
                onClick={() => setShowTroll(false)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3"
              >
                Закрыть позор 😭
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/img/be59726a-8dac-406f-b3c7-b3cc0ab0ea3d.jpg" 
              alt="NaEbalCoin"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-xl font-bold text-neon-cyan">NaEbalCoin</span>
          </div>
          <p className="text-gray-400">
            Будущее криптовалют уже здесь. Присоединяйтесь к революции!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;