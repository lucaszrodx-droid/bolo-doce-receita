import { Clock, Users, ChefHat, Cake } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative py-20 px-6 text-center bg-gradient-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Cake className="w-16 h-16 text-accent" strokeWidth={1.5} />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground mb-4 tracking-tight">
            Bolo de Chocolate
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Uma receita clássica que conquista corações há gerações — cremoso, 
            intenso e irresistível.
          </p>
        </div>
      </header>

      {/* Quick Info */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Preparo</p>
                <p className="font-medium text-foreground">50 min</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Porções</p>
                <p className="font-medium text-foreground">12 fatias</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ChefHat className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Dificuldade</p>
                <p className="font-medium text-foreground">Fácil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 text-center">
            Uma História Deliciosa
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-4">
            <p>
              O bolo de chocolate tem suas raízes no século XVIII, quando o cacau começou 
              a ser usado na culinária europeia. Mas foi apenas em 1764, nos Estados Unidos, 
              que surgiu a primeira receita documentada de um bolo com chocolate.
            </p>
            <p>
              No Brasil, o bolo de chocolate se tornou um verdadeiro símbolo de celebração. 
              Presente em aniversários, festas e momentos especiais, ele carrega consigo 
              memórias afetivas de gerações. A receita que compartilhamos aqui é uma versão 
              tradicional, aperfeiçoada ao longo dos anos para alcançar o equilíbrio 
              perfeito entre textura macia e sabor intenso.
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-3xl mx-auto" />

      {/* Ingredients Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center">
            Ingredientes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Massa */}
            <div>
              <h3 className="font-display text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
                Para a Massa
              </h3>
              <ul className="space-y-3">
                {[
                  "3 xícaras de farinha de trigo",
                  "2 xícaras de açúcar",
                  "1 xícara de chocolate em pó",
                  "2 colheres de sopa de fermento",
                  "1 colher de chá de sal",
                  "4 ovos",
                  "1 xícara de óleo",
                  "2 xícaras de água quente",
                  "1 colher de sopa de essência de baunilha",
                ].map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="font-body">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cobertura */}
            <div>
              <h3 className="font-display text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
                Para a Cobertura
              </h3>
              <ul className="space-y-3">
                {[
                  "1 lata de leite condensado",
                  "4 colheres de sopa de chocolate em pó",
                  "2 colheres de sopa de manteiga",
                  "1 caixinha de creme de leite",
                ].map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="font-body">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-3xl mx-auto" />

      {/* Instructions Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center">
            Modo de Preparo
          </h2>

          {/* Massa */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-medium text-foreground mb-8 pb-2 border-b border-border">
              A Massa
            </h3>
            <ol className="space-y-6">
              {[
                "Pré-aqueça o forno a 180°C e unte uma forma de 25cm com manteiga e farinha.",
                "Em uma tigela grande, misture todos os ingredientes secos: farinha, açúcar, chocolate em pó, fermento e sal.",
                "Adicione os ovos, o óleo e a essência de baunilha. Misture bem com uma espátula ou batedeira em velocidade baixa.",
                "Aos poucos, adicione a água quente e misture até obter uma massa homogênea e bem líquida — isso é normal!",
                "Despeje a massa na forma preparada e leve ao forno por aproximadamente 40 minutos, ou até que um palito saia limpo.",
                "Retire do forno e deixe esfriar por 15 minutos antes de desenformar.",
              ].map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-foreground font-body leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Cobertura */}
          <div>
            <h3 className="font-display text-xl font-medium text-foreground mb-8 pb-2 border-b border-border">
              A Cobertura
            </h3>
            <ol className="space-y-6">
              {[
                "Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga.",
                "Leve ao fogo médio, mexendo sempre, até engrossar e soltar do fundo da panela.",
                "Retire do fogo e adicione o creme de leite. Misture bem.",
                "Despeje a cobertura ainda quente sobre o bolo e espalhe por cima e nas laterais.",
                "Deixe esfriar completamente antes de servir para a cobertura firmar.",
              ].map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-foreground font-body leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Separator className="max-w-3xl mx-auto" />

      {/* Tips Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center">
            Dicas do Chef
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Chocolate de qualidade",
                description: "Use chocolate em pó 100% cacau para um sabor mais intenso e menos doce.",
              },
              {
                title: "Água quente",
                description: "A água quente ajuda a dissolver o chocolate e deixa a massa mais fofa.",
              },
              {
                title: "Não abra o forno",
                description: "Evite abrir o forno nos primeiros 30 minutos para o bolo não murchar.",
              },
              {
                title: "Conservação",
                description: "Guarde em recipiente fechado por até 5 dias ou congele por até 3 meses.",
              },
            ].map((tip, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-display text-lg font-medium text-foreground mb-2">
                  {tip.title}
                </h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Cake className="w-10 h-10 text-accent mx-auto mb-4" strokeWidth={1.5} />
          <p className="text-muted-foreground font-body text-sm">
            Feito com amor para adoçar seus momentos especiais.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;