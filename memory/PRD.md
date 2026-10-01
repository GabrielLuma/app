# PRD — Museu do Cristal · Blumenau

## Problema original
Site institucional para divulgar um museu de cristal em Blumenau (SC). Atendimento seg–sex 9h–18h, sáb 9h–13h. Produção de cristal ao vivo seg–sex 9h–13h e sábado sob agendamento. Fundado em 1995; mestres vidreiros com espetáculo ao vivo; história do vidro (2.000+ anos); entrada gratuita; loja com taças, copos e decorativos Cristais di Murano.

## Escolhas do usuário
- Estilo: elegante/sofisticado — tons escuros com detalhes dourado/âmbar (brilho do cristal Murano)
- Contato: apenas botão de WhatsApp (+55 47 99205-6444)
- Endereço: Rua Rudolf Roedel, 233 — Salto Weissbach, Blumenau — SC, 89032-080
- Idioma: apenas Português (pt-BR)

## Arquitetura
- Frontend-only (React 19 + Tailwind + framer-motion + lenis); backend FastAPI mantido como health-check (/api/)
- Componentes: Navbar, Hero (parallax + reveal mascarado), Marquee, Historia, Espetaculo, Loja (abas com filtro), Visita, Footer, shared.jsx (Logo SVG, WhatsAppIcon, Reveal, status do museu)
- Status ao vivo calculado no cliente (produção ao vivo seg–sex 9h–13h; aberto seg–sex 9h–18h, sáb 9h–13h)
- Identidade: logo SVG original (gota/chama âmbar), favicon.svg, fontes Cormorant Garamond + Plus Jakarta Sans + JetBrains Mono

## Personas
- Turista/família visitando Blumenau: quer horários, endereço e saber que é gratuito
- Visitante interessado no espetáculo ao vivo: quer agendar sábado pelo WhatsApp
- Comprador: quer ver as peças da loja e consultar disponibilidade

## Implementado (2026-10-01)
- Hero cinematográfico com parallax, reveal linha a linha e badge de status em tempo real
- Marquee editorial lento
- Seção História (1995 / 2.000+ anos / entrada gratuita) com fotos emolduradas
- Seção Espetáculo ao Vivo com horários e CTA de agendamento de sábado via WhatsApp
- Loja com abas (Todas/Taças/Copos/Decorativos) e animação de filtro
- Seção Visite: horários, endereço, rota no Google Maps, CTA WhatsApp + botão flutuante
- Footer completo; favicon SVG; responsivo (375/768/1366 verificado)
- Fotos reais da loja (8) substituindo imagens de exemplo — galeria masonry otimizada (~350 KB/foto) (2026-10-01)
- Fotos reais do museu: corredor de exposição na História + nova faixa "Peças do acervo" com 3 fotos de peças (fundo branco removido e recomposto em fundo escuro com brilho âmbar) (2026-10-01)
- Rebrand para GLAS PARK (navbar, footer, título da aba, hero e texto da História); frase do hero: "Onde a areia e o fogo se transformam em obra de arte."; seção renomeada de "Espetáculo ao Vivo" para "Produção ao Vivo" (id #producao) (2026-10-01)

- Hero agora usa foto real do mestre soprando cristal (/images/hero-soprador.jpg, bordas brancas removidas, 1647x933) (2026-10-01)
- Cronômetro da produção ao vivo na seção Produção (ProductionTimer.jsx): conta regressiva para a próxima sessão seg–sex 9h; quando ao vivo, mostra "termina em" até as 13h (2026-10-01)

## Pendente
- 5 fotos reais da produção (enviadas em chat mas não registradas como arquivo — aguardando reenvio) para a grade da seção Produção ao Vivo (/images/producao/prod-1..6.jpg, com bordas brancas recortadas); remover os fallbacks Unsplash em Espetaculo.jsx (SHOTS)

## Backlog
- P0: nenhum pendente
- P1: galeria de fotos ampliada (lightbox), seção de depoimentos de visitantes
- P2: versão em inglês, integração Instagram, SEO/schema.org LocalBusiness

## Próximas tarefas
- Adicionar fotos reais do museu/fábrica quando o cliente enviar
- Lightbox na galeria da loja
- Depoimentos
