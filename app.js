// Pushed on 2026-05-22T19:40:00-03:00
// =========================================================================
// ==================== AGRIMANAGE CORE APPLICATION LOGIC ==================
// =========================================================================

// ==================== 1. LOCALIZATION DICTIONARIES ====================
const translations = {
    'pt-BR': {
        auth_title: 'Aurelius',
        auth_subtitle: 'Gestão Agrária Inteligente',
        email: 'E-mail de Usuário',
        password: 'Senha de Acesso',
        btn_login: 'Entrar no Sistema',
        btn_demo: '',
        auth_note: '© ' + new Date().getFullYear() + ' AXIS - Soluciones Digitales.<br>Todos los derechos reservados.',
        auth_or: '',
        auth_toggle_signup: 'Criar nova conta (Registrar)',
        auth_toggle_login: 'Já tem uma conta? Entrar',
        btn_signup: 'Criar Conta no Supabase',
        cloud_status_local: 'Modo Local',
        cloud_status_syncing: 'Sincronizando...',
        cloud_status_synced: 'Sincronizado',
        sub_brand: 'Tecnologia Agrária',
        nav_dashboard: 'Painel Geral',
        nav_talhoes: 'Áreas & Talhões',
        nav_recursos: 'Frota & Equipe',
        nav_insumos: 'Insumos & Clima',
        nav_financeiro: 'Finanças & Câmbio',
        btn_quick_apply: 'Aplicar Defensivo',
        btn_quick_expense: 'Lançar Finança',
        role_owner: 'Gestor Principal',
        demo_banner_title: 'Modo de Demonstração Ativo (Local)',
        demo_banner_desc: 'Os dados estão salvos neste dispositivo. Vá em Configurações para vincular o Supabase em nuvem.',
        btn_connect_supabase: 'Configurar Supabase',
        dash_welcome_sub: 'Aqui está o panorama completo dos seus talhões na Tríplice Fronteira.',
        stats_revenue: 'Receitas',
        stats_expense: 'Gastos',
        stats_net: 'Saldo Líquido',
        weather_title: 'Clima Local',
        weather_sunny: 'Ensolarado',
        weather_safe: 'Clima IDEAL para aplicação de defensivos',
        weather_danger: 'RISCO DE DERIVA: Vento acima de 15 km/h',
        map_title: 'Monitoramento de Lotes',
        map_subtitle: 'NDVI & Saúde Geral da Plantação',
        map_sensor_live: 'Sensores em Tempo Real',
        map_total_area: 'Área Total Mapeada',
        map_health_avg: 'Saúde Média NDVI',
        btn_manage_plots: 'Gerenciar Áreas',
        alerts_title: 'Alertas Ativos',
        quick_add_plot: 'Cadastrar Lote',
        quick_add_plot_desc: 'Registrar novos hectares',
        quick_add_machinery: 'Nova Máquina',
        quick_add_machinery_desc: 'Cadastrar frota/trator',
        quick_add_staff: 'Funcionários',
        quick_add_staff_desc: 'Registrar mensalista/diarista',
        quick_add_fuel: 'Diesel / Abastecer',
        quick_add_fuel_desc: 'Registrar consumo de combustível',
        talhoes_title: 'Cadastro de Áreas & Lotes',
        talhoes_subtitle: 'Gerencie suas plantações em hectares e alqueires paulistas.',
        btn_add_plot: 'Novo Lote / Talhão',
        unit_conversion_rule: 'Fator de Fronteira: 1 Alqueire Paulista = 2,42 Hectares',
        recursos_title: 'Recursos e Frota',
        recursos_subtitle: 'Gestão de maquinarias, colaboradores e abastecimento de diesel.',
        subnav_machinery: 'Frota de Máquinas',
        subnav_staff: 'Equipe & Diaristas',
        subnav_fuel: 'Combustível (Diesel)',
        machinery_list_title: 'Maquinários Registrados',
        btn_add_machinery: 'Nova Máquina',
        staff_list_title: 'Lista de Colaboradores e Diaristas',
        btn_add_staff: 'Novo Funcionário',
        th_name: 'Nome',
        th_role: 'Função',
        th_type: 'Vínculo',
        th_wage: 'Salário / Diária',
        th_actions: 'Ações',
        fuel_list_title: 'Depósito de Combustível',
        btn_add_fuel_log: 'Abastecer Máquina / Depósito',
        fuel_tank_title: 'Tanque Central',
        fuel_tank_desc: 'Capacidade de 5.000 Litros',
        fuel_alert_info: 'Alerta ativo de nível mínimo abaixo de 20%',
        fuel_history_title: 'Histórico Recente de Consumo',
        th_date: 'Data',
        th_desc: 'Descrição',
        th_liters: 'Quantidade (L)',
        th_cost: 'Custo',
        insumos_title: 'Insumos & Aplicações',
        insumos_subtitle: 'Estoque de defensivos químicos e registros das pulverizações em talhões.',
        subnav_pesticide_stock: 'Estoque de Defensivos',
        subnav_pesticide_apply: 'Aplicações no Campo',
        pesticides_list_title: 'Insumos em Estoque',
        btn_add_pesticide: 'Cadastrar Insumo',
        pesticides_history_title: 'Histórico de Pulverizações',
        btn_add_apply_log: 'Registrar Aplicação',
        th_plot: 'Talhão',
        th_pesticide: 'Defensivo',
        th_applied_qty: 'Qtd Aplicada',
        th_weather_apply: 'Clima de Aplicação',
        financeiro_title: 'Caixa & Motor Cambial',
        financeiro_subtitle: 'Lançamento de gastos/receitas e conversão automática entre moedas.',
        btn_add_financa: 'Lançar Transação',
        currency_motor_title: 'Motor Cambial Multi-Moedas (Conversão Automática)',
        ledger_title: 'Livro Caixa & Transações',
        view_in: 'Exibir Valores em:',
        th_amount_original: 'Valor Original',
        th_amount_converted: 'Equivalência de Câmbio',
        config_title: 'Ajustes & Configurações',
        config_subtitle: 'Gerencie suas informações de perfil, taxas de câmbio e ajustes do sistema.',
        nav_safras: 'Safras & Ciclos',
        nav_graos_sementes: 'Grãos & Sementes',
        safras_title: 'Controle de Safras',
        safras_subtitle: 'Gerencie os períodos produtivos e consolide todos os gastos da fazenda.',
        btn_add_safra: 'Nova Safra',
        active_safra_badge: 'Safra Vigente',
        safra_card_title: 'Resumo da Safra Vigente',
        safra_expenses: 'Custos da Safra',
        safra_revenues: 'Receitas da Safra',
        safra_net: 'Resultado Líquido',
        safra_period: 'Período',
        safra_inactive: 'Encerrada',
        safra_actions: 'Ações',
        btn_activate_safra: 'Definir Vigente',
        modal_add_safra_title: 'Cadastrar Nova Safra',
        label_safra_name: 'Nome da Safra (ex: Safra Soja 2025/2026)',
        label_safra_start: 'Data de Início do Período',
        label_safra_end: 'Data de Fim do Período',
        label_safra_activate: 'Ativar esta safra imediatamente',
        inv_sect_seeds_grains: 'Sementes & Grãos em Estoque',
        subnav_seeds_grains_catalog: 'Catálogo de Variedades',
        btn_add_seed_grain: 'Novo Registro',
        modal_add_seed_grain_title: 'Registrar Sementes / Grãos no Estoque',
        label_seed_grain_type: 'Tipo de Registro',
        label_seed_grain_name: 'Nome da Variedade / Item',
        label_seed_grain_qty: 'Quantidade',
        label_seed_grain_unit: 'Unidade',
        label_seed_grain_cost: 'Custo Total / Valor Estimado',
        label_seed_grain_safra: 'Safra Relacionada',
        label_seed_grain_auto_tx: 'Lançar transação no Livro Caixa',
        type_seed_bought: 'Semente Comprada',
        type_seed_treated: 'Semente Tratada',
        type_grain_harvested: 'Grão Colhido',
        config_supabase_title: 'Sincronização Supabase (Banco de Dados Cloud)',
        config_supabase_desc: 'Insira as credenciais do seu projeto Supabase para salvar todos os dados em nuvem com criptografia de login.',
        btn_disconnect: 'Desconectar',
        btn_save_config: 'Conectar Supabase',
        config_rates_title: 'Cotação de Câmbio de Hoje',
        btn_save_rates: 'Atualizar Câmbio',
        btn_sync_rates_realtime: 'Obter Câmbio em Tempo Real',
        btn_gps_activate: 'Usar GPS Real',
        config_layout_title: 'Interface do Sistema',
        config_layout_desc: 'Altere a exibição para formato de aplicativo móvel ou painel de desktop completo.',
        layout_auto: 'Detecção Automática (Recomendado)',
        layout_mobile: 'Forçar Layout de Celular',
        layout_desktop: 'Forçar Layout de Computador',
        chat_ai_status: 'Online • Assistente de Campo',
        chat_welcome: 'Olá! Sou o AgriIA, seu assistente agrário inteligente. Você pode falar comigo por voz para lançar dados sem precisar navegar pelo app! Diga por voz:',
        chat_prompt_1: '"Registrar gasto de 100 dólares com diesel no talhão norte"',
        chat_prompt_2: '"Registrar colheita de 120 sacas de soja no talhão leste"',
        chat_prompt_3: '"Pulverizar 5 litros de Tebuconazole no talhão 2"',
        chat_welcome_camera: 'Ou clique na câmera para me enviar fotos de folhas para identificar pragas!',
        chat_listening: 'AgriIA ouvindo seu comando por voz...',
        btn_save: 'Salvar Registro',
        modal_add_plot_title: 'Registrar Novo Talhão',
        label_plot_name: 'Nome do Talhão / Lote',
        label_plot_crop: 'Cultura Plantada',
        crop_soy: 'Soja',
        crop_corn: 'Milho',
        crop_wheat: 'Trigo',
        crop_pasture: 'Pasto / Descanso',
        modal_add_machinery_title: 'Cadastrar Novo Maquinário',
        label_mach_name: 'Modelo da Máquina',
        label_mach_type: 'Tipo de Maquinário',
        mach_tractor: 'Trator',
        mach_harvester: 'Colheitadeira',
        mach_sprayer: 'Pulverizador',
        mach_seeder: 'Semeadora',
        modal_add_staff_title: 'Cadastrar Novo Colaborador',
        label_staff_name: 'Nome Completo',
        label_staff_role: 'Cargo / Função',
        label_staff_type: 'Regime de Trabalho',
        staff_clt: 'CLT (Mensalista Fixo)',
        staff_diarista: 'Diarista (Trabalho por Dia)',
        label_staff_wage: 'Valor do Salário / Diária',
        label_staff_currency: 'Moeda de Pagamento',
        modal_add_fuel_title: 'Registrar Consumo / Carga de Diesel',
        label_fuel_desc: 'Descrição / Motivo',
        label_fuel_machinery: 'Destino do Combustível',
        fuel_tank_store: 'Tanque Central de Armazenamento',
        label_fuel_cost: 'Custo Financeiro (Opcional)',
        label_fuel_currency: 'Moeda',
        modal_add_pesticide_title: 'Cadastrar Defensivo em Estoque',
        label_pesticide_name: 'Nome Comercial do Defensivo',
        label_pesticide_type: 'Tipo de Ação Química',
        type_fungicide: 'Fungicida (Ferrugens/Fungos)',
        type_herbicide: 'Herbicida (Erva daninha)',
        type_insecticide: 'Inseticida (Pragas/Bichos)',
        label_pesticide_stock: 'Estoque Atual (Litros)',
        label_pesticide_payment_type: 'Forma de Pagamento',
        label_pesticide_due_date: 'Data de Vencimento',
        modal_add_apply_title: 'Lançar Aplicação no Campo',
        label_apply_plot: 'Lote / Talhão Alvo',
        label_apply_pesticide: 'Insumo Defensivo Utilizado',
        label_apply_amount: 'Volume Aplicado (Litros)',
        label_apply_weather: 'Clima no Momento da Aplicação',
        modal_add_financa_title: 'Lançar Caixa / Movimento',
        label_fin_type: 'Tipo de Transação',
        finance_type_expense: 'Saída / Gasto da Fazenda',
        finance_type_revenue: 'Entrada / Receita Financeira',
        label_fin_desc: 'Descrição da Transação',
        label_fin_category: 'Categoria de Custo',
        cat_fuel: 'Combustível (Diesel)',
        cat_pesticides: 'Defensivos Insumos',
        cat_staff: 'Pagamento de Colaborador',
        cat_harvest: 'Colheita / Venda de Grãos',
        cat_other: 'Outras Operações',
        label_fin_plot: 'Talhão Relacionado (Opcional)',
        plot_none: 'Lançamento Geral da Fazenda',
        label_fin_currency: 'Moeda',
        label_fin_pesticide: 'Insumo Relacionado',
        label_fin_qty: 'Quantidade Comprada (L / Kg)',
        pest_selector_title: 'Escanear Pragas via Foto',
        pest_selector_desc: 'Selecione uma das fotos tiradas no campo abaixo para fazer o diagnóstico imediato de pragas e doenças via AgriIA:',
        btn_upload_own_pic: 'Enviar Minha Própria Foto',
        active_status: 'Ativo',
        idle_status: 'Ocioso',
        service_status: 'Manutenção',
        fuel_indicator: 'Combustível',
        last_action: 'Última ação',
        btn_treat_now: 'Tratar Lote Agora',
        chart_title: 'Fluxo de Caixa Mensal',
        chart_subtitle: 'Comparativo de Receitas vs Despesas (BRL)',
        distribution_title: 'Resumo por Categoria',
        distribution_subtitle: 'Gastos categorizados em BRL',
        nav_inventario: 'Inventário',
        tab_inventario: 'Invent.',
        inventario_title: 'Inventário de Estoque',
        inventario_subtitle: 'Visão consolidada de todos os ativos em estoque: insumos, combustível e grãos colhidos.',
        inv_sect_pesticides: 'Defensivos Químicos',
        inv_sect_fuel: 'Combustível (Diesel)',
        inv_sect_harvest: 'Grãos Colhidos (Receitas)',
        inv_sect_purchases: 'Histórico de Compras',
        inv_total_pesticides: 'Total de Defensivos em Estoque',
        inv_total_fuel: 'Nível do Tanque Central',
        inv_total_harvest_value: 'Valor Total Safras',
        inv_low_stock_warning: 'Estoque Baixo (< 100L)',
        inv_ok_stock: 'Estoque OK',
        inv_item_name: 'Produto',
        inv_item_type: 'Tipo',
        inv_item_qty: 'Quantidade',
        inv_item_status: 'Status',
        inv_item_cost: 'Custo de Aquisição',
        inv_no_data: 'Nenhum item registrado nesta categoria.',
        label_pesticide_cost: 'Custo de Aquisição (Opcional)',
        label_pesticide_currency: 'Moeda do Custo',
        btn_delete_machine: 'Remover Máquina',
        cfg_profile_header: 'Perfil do Produtor',
        cfg_profile_picture: 'Foto ou Logotipo',
        cfg_profile_picture_help: 'Envie uma foto da sua fazenda ou selecione um dos ícones abaixo.',
        cfg_preset_avatars: 'Ícones Rápidos (Presets)',
        cfg_profile_name: 'Nome do Produtor / Fazenda',
        btn_save_profile: 'Salvar Perfil',
        cfg_system_header: 'Ajustes do Sistema',
        cfg_cloud_backup: 'Backup e Sincronização',
        btn_reset_database: 'Limpar Todo o Banco de Dados',
        btn_toggle_layout: 'Alternar Aparência (Celular/Painel)',
        mach_planter: 'Plantadeira',
        mach_truck: 'Caminhão',
        mach_trailer: 'Carreta / Reboque',
        mach_pickup: 'Camionete / Utilitário',
        mach_silage: 'Ensiladeira',
        mach_spreader: 'Distribuidor de Calcário/Adubo',
        th_amount_converted: 'Equiv. BRL',
        nav_relatorios: 'Relatórios & Análises',
        tab_relatorios: 'Relatórios',
        relatorios_title: 'Relatórios & Análises',
        relatorios_subtitle: 'Gere relatórios de caixa, insumos, combustível, colheitas e cadastros.',
        btn_print: 'Imprimir Relatório',
        btn_generate: 'Gerar Relatório',
        ai_command_placeholder: 'IA: "Relatório de gastos de caixa no talhão 1 em maio"',
        lbl_module: 'Módulo do Relatório',
        lbl_start_date: 'Data Inicial',
        lbl_end_date: 'Data Final',
        lbl_related_item: 'Filtro de Item Específico',
        lbl_quick_ranges: 'Períodos Rápidos',
        lbl_generate_ai: 'Executar Comando IA',
        btn_execute: 'Executar',
        report_empty: 'Nenhum registro encontrado para os filtros selecionados.',
        rep_total_revenue: 'Receitas Totais',
        rep_total_expense: 'Gastos Totais',
        rep_net_balance: 'Saldo Líquido',
        rep_total_liters: 'Diesel Total (L)',
        rep_avg_consumption: 'Consumo Médio (L)',
        rep_total_cost: 'Custo Total',
        rep_total_applied: 'Total Aplicado (L)',
        rep_avg_applied: 'Média por Aplicação (L)',
        rep_total_bags: 'Produção Total (Sacas)',
        rep_total_weight: 'Peso Estimado (Kg)',
        rep_count: 'Total Registrado',
        rep_active_plots: 'Talhões Ativos',
        rep_active_machinery: 'Máquinas Ativas',
        rep_active_staff: 'Funcionários Ativos',
        rep_all: 'Todos',
        rep_mod_financeiro: 'Finanças / Caixa',
        rep_mod_insumos: 'Defensivos / Insumos',
        rep_mod_combustivel: 'Uso de Combustível',
        rep_mod_producao: 'Colheitas e Produção',
        rep_mod_cadastros: 'Cadastro Geral (Ativos)',
        rep_mod_frota: 'Frota & Maquinários (Custos)',
        rep_mod_equipe: 'Equipe & Colaboradores (Folha/Custos)',
        rep_fleet_title: 'Relatório de Frota & Maquinários',
        rep_staff_title: 'Relatório de Equipe & Colaboradores',
        rep_fleet_kpi_fuel: 'Combustível Total',
        rep_fleet_kpi_maintenance: 'Manutenção & Peças',
        rep_fleet_kpi_total: 'Gasto Total Frota',
        rep_staff_kpi_total: 'Total Pago (Equipe)',
        rep_staff_kpi_clt: 'Mensalistas (CLT)',
        rep_staff_kpi_diarista: 'Diaristas & Horistas',
        rep_th_machine: 'Veículo / Máquina',
        rep_th_staff: 'Colaborador',
        rep_th_type: 'Tipo de Registro',
        rep_th_wage_type: 'Vínculo',
        rep_type_refuel: 'Abastecimento',
        rep_type_maintenance: 'Manutenção',
        rep_type_repair: 'Reparo',
        rep_type_parts: 'Peças / Reposição'
    },
    'es-PY': {
        auth_title: 'Aurelius',
        auth_subtitle: 'Gestión Agraria Inteligente',
        email: 'Correo de Usuario',
        password: 'Contraseña de Acceso',
        btn_login: 'Ingresar al Sistema',
        btn_demo: '',
        auth_note: '© ' + new Date().getFullYear() + ' AXIS - Soluciones Digitales.<br>Todos los derechos reservados.',
        auth_or: '',
        auth_toggle_signup: 'Crear nueva cuenta (Registrar)',
        auth_toggle_login: '¿Ya tiene una cuenta? Ingresar',
        btn_signup: 'Crear Cuenta en Supabase',
        cloud_status_local: 'Modo Local',
        cloud_status_syncing: 'Sincronizando...',
        cloud_status_synced: 'Sincronizado',
        sub_brand: 'Tecnología Agraria',
        nav_dashboard: 'Panel General',
        nav_talhoes: 'Áreas & Lotes',
        nav_recursos: 'Flota & Equipo',
        nav_insumos: 'Insumos & Clima',
        nav_financeiro: 'Finanzas & Cambio',
        btn_quick_apply: 'Aplicar Defensivo',
        btn_quick_expense: 'Registrar Caja',
        role_owner: 'Administrador Principal',
        demo_banner_title: 'Modo de Demostración Activo (Local)',
        demo_banner_desc: 'Los datos están guardados en este dispositivo. Ingrese a Configuración para vincular Supabase en la nube.',
        btn_connect_supabase: 'Configurar Supabase',
        dash_welcome_sub: 'Aquí está el panorama completo de sus lotes (chacras) en la Triple Frontera.',
        stats_revenue: 'Ingresos',
        stats_expense: 'Gastos',
        stats_net: 'Saldo Neto',
        weather_title: 'Clima Local',
        weather_sunny: 'Soleado',
        weather_safe: 'Clima IDEAL para la aplicación de defensivos',
        weather_danger: 'RIESGO DE DERIVA: Viento superior a 15 km/h',
        map_title: 'Monitoreo de Lotes',
        map_subtitle: 'NDVI & Salud General del Cultivo',
        map_sensor_live: 'Sensores en Tiempo Real',
        map_total_area: 'Área Total Mapeada',
        map_health_avg: 'Salud Promedio NDVI',
        btn_manage_plots: 'Gestionar Lotes',
        alerts_title: 'Alertas Activas',
        quick_add_plot: 'Registrar Lote',
        quick_add_plot_desc: 'Registrar nuevas hectáreas',
        quick_add_machinery: 'Nueva Máquina',
        quick_add_machinery_desc: 'Registrar tractor o pulverizador',
        quick_add_staff: 'Personal / Diaristas',
        quick_add_staff_desc: 'Registrar operario o diarista',
        quick_add_fuel: 'Gasoil / Abastecer',
        quick_add_fuel_desc: 'Registrar consumo de gasoil',
        talhoes_title: 'Registro de Áreas & Lotes',
        talhoes_subtitle: 'Gestione sus cultivos en hectáreas y alqueires paulistas.',
        btn_add_plot: 'Nuevo Lote / Chacra',
        unit_conversion_rule: 'Conversión en Frontera: 1 Alqueire Paulista = 2,42 Hectáreas',
        recursos_title: 'Recursos y Flota',
        recursos_subtitle: 'Gestión de maquinarias, operarios y consumo de gasoil.',
        subnav_machinery: 'Flota de Máquinas',
        subnav_staff: 'Personal & Diaristas',
        subnav_fuel: 'Combustible (Gasoil)',
        machinery_list_title: 'Maquinarias Registradas',
        btn_add_machinery: 'Nueva Máquina',
        staff_list_title: 'Lista de Colaboradores y Diaristas',
        btn_add_staff: 'Nuevo Personal',
        th_name: 'Nombre',
        th_role: 'Función',
        th_type: 'Vínculo',
        th_wage: 'Salario / Diaria',
        th_actions: 'Acciones',
        fuel_list_title: 'Depósito de Combustible',
        btn_add_fuel_log: 'Abastecer Máquina / Depósito',
        fuel_tank_title: 'Tanque Central',
        fuel_tank_desc: 'Capacidad de 5.000 Litros',
        fuel_alert_info: 'Alerta activa de nivel mínimo menor a 20%',
        fuel_history_title: 'Historial Reciente de Consumo',
        th_date: 'Fecha',
        th_desc: 'Descripción',
        th_liters: 'Cantidad (L)',
        th_cost: 'Costo',
        insumos_title: 'Insumos & Aplicaciones',
        insumos_subtitle: 'Stock de agroquímicos y registros de pulverizaciones en chacras.',
        subnav_pesticide_stock: 'Stock de Defensivos',
        subnav_pesticide_apply: 'Aplicaciones en Campo',
        pesticides_list_title: 'Defensivos en Stock',
        btn_add_pesticide: 'Registrar Insumo',
        pesticides_history_title: 'Historial de Pulverizaciones',
        btn_add_apply_log: 'Registrar Aplicación',
        th_plot: 'Lote / Chacra',
        th_pesticide: 'Defensivo',
        th_applied_qty: 'Cant Aplicada',
        th_weather_apply: 'Clima de Aplicación',
        financeiro_title: 'Caja & Motor Cambiario',
        financeiro_subtitle: 'Registro de gastos/ingresos y conversión automática entre monedas.',
        btn_add_financa: 'Registrar Transacción',
        currency_motor_title: 'Motor Cambiario Multi-Monedas (Conversión Automática)',
        ledger_title: 'Libro Diario & Transacciones',
        view_in: 'Exhibir Valores en:',
        th_amount_original: 'Valor Original',
        th_amount_converted: 'Equivalencia Cambiaria',
        config_title: 'Ajustes & Configuraciones',
        config_subtitle: 'Gestione su información de perfil, tipos de cambio y ajustes del sistema.',
        nav_safras: 'Zafras & Ciclos',
        nav_graos_sementes: 'Semillas & Granos',
        safras_title: 'Control de Zafras',
        safras_subtitle: 'Gestione los períodos productivos y consolide todos los gastos de la finca.',
        btn_add_safra: 'Nueva Zafra',
        active_safra_badge: 'Zafra Vigente',
        safra_card_title: 'Resumen de la Zafra Vigente',
        safra_expenses: 'Costos de la Zafra',
        safra_revenues: 'Ingresos de la Zafra',
        safra_net: 'Resultado Neto',
        safra_period: 'Período',
        safra_inactive: 'Finalizada',
        safra_actions: 'Acciones',
        btn_activate_safra: 'Definir Vigente',
        modal_add_safra_title: 'Registrar Nueva Zafra',
        label_safra_name: 'Nombre de la Zafra (ej: Zafra Soja 2025/2026)',
        label_safra_start: 'Fecha de Inicio del Período',
        label_safra_end: 'Fecha de Fin del Período',
        label_safra_activate: 'Activar esta zafra inmediatamente',
        inv_sect_seeds_grains: 'Semillas & Granos en Stock',
        subnav_seeds_grains_catalog: 'Catálogo de Variedades',
        btn_add_seed_grain: 'Nuevo Registro',
        modal_add_seed_grain_title: 'Registrar Semillas / Granos en Stock',
        label_seed_grain_type: 'Tipo de Registro',
        label_seed_grain_name: 'Nombre de la Variedad / Item',
        label_seed_grain_qty: 'Cantidad',
        label_seed_grain_unit: 'Unidad',
        label_seed_grain_cost: 'Costo Total / Valor Estimado',
        label_seed_grain_safra: 'Zafra Relacionada',
        label_seed_grain_auto_tx: 'Registrar transacción en el Libro Diario',
        type_seed_bought: 'Semilla Comprada',
        type_seed_treated: 'Semilla Tratada',
        type_grain_harvested: 'Grano Cosechado',
        config_supabase_title: 'Sincronización Supabase (Base de Datos en la Nube)',
        config_supabase_desc: 'Ingrese las credenciales de su proyecto Supabase para guardar todos los datos en la nube de forma segura con protección de acceso.',
        btn_disconnect: 'Desconectar',
        btn_save_config: 'Conectar Supabase',
        config_rates_title: 'Tipo de Cambio de Hoy',
        btn_save_rates: 'Actualizar Cambio',
        btn_sync_rates_realtime: 'Obtener Cambio en Tiempo Real',
        btn_gps_activate: 'Usar GPS Real',
        config_layout_title: 'Diseño del Sistema',
        config_layout_desc: 'Cambie la visualización al formato de aplicación móvil o panel de escritorio completo.',
        layout_auto: 'Detección Automática (Recomendado)',
        layout_mobile: 'Forzar Diseño de Celular',
        layout_desktop: 'Forzar Diseño de Computadora',
        chat_ai_status: 'En línea • Asistente de Campo',
        chat_welcome: '¡Hola! Soy AgriIA, su asistente agrario inteligente. ¡Puede hablarme por voz para ingresar datos sin tener que navegar por la aplicación! Diga en voz alta:',
        chat_prompt_1: '"Registrar gasto de 100 dólares con gasoil en el lote norte"',
        chat_prompt_2: '"Registrar cosecha de 120 sacos de soja en el lote este"',
        chat_prompt_3: '"Pulverizar 5 litros de Tebuconazole en el lote 2"',
        chat_welcome_camera: '¡O haga clic en la cámara para enviarme fotos de hojas e identificar plagas!',
        chat_listening: 'AgriIA escuchando su comando por voz...',
        btn_save: 'Guardar Registro',
        modal_add_plot_title: 'Registrar Nuevo Lote',
        label_plot_name: 'Nombre del Lote / Chacra',
        label_plot_crop: 'Cultura Sembrada',
        crop_soy: 'Soja',
        crop_corn: 'Maíz',
        crop_wheat: 'Trigo',
        crop_pasture: 'Pastura / Descanso',
        modal_add_machinery_title: 'Registrar Nueva Máquina',
        label_mach_name: 'Modelo de la Máquina',
        label_mach_type: 'Tipo de Maquinaria',
        mach_tractor: 'Tractor',
        mach_harvester: 'Cosechadora',
        mach_sprayer: 'Pulverizador',
        mach_seeder: 'Sembradora',
        modal_add_staff_title: 'Registrar Nuevo Personal',
        label_staff_name: 'Nombre Completo',
        label_staff_role: 'Cargo / Función',
        label_staff_type: 'Régimen de Trabajo',
        staff_clt: 'CLT (Mensual Fijo)',
        staff_diarista: 'Diarista (Jornalero Diario)',
        label_staff_wage: 'Monto del Salario / Jornal',
        label_staff_currency: 'Moneda de Pago',
        modal_add_fuel_title: 'Registrar Consumo / Carga de Gasoil',
        label_fuel_desc: 'Descripción / Motivo',
        label_fuel_machinery: 'Destino del Combustible',
        fuel_tank_store: 'Tanque Central de Almacenamiento',
        label_fuel_cost: 'Costo Financiero (Opcional)',
        label_fuel_currency: 'Moneda',
        modal_add_pesticide_title: 'Registrar Defensivo en Stock',
        label_pesticide_name: 'Nombre Comercial del Defensivo',
        label_pesticide_type: 'Tipo de Acción Química',
        type_fungicide: 'Fungicida (Roya/Hongos)',
        type_herbicide: 'Herbicida (Maleza)',
        type_insecticide: 'Insecticida (Plagas/Bichos)',
        label_pesticide_stock: 'Stock Actual (Litros)',
        label_pesticide_payment_type: 'Forma de Pago',
        label_pesticide_due_date: 'Fecha de Vencimiento',
        modal_add_apply_title: 'Registrar Aplicación en Campo',
        label_apply_plot: 'Lote / Chacra Objetivo',
        label_apply_pesticide: 'Insumo Defensivo Utilizado',
        label_apply_amount: 'Volumen Aplicado (Litros)',
        label_apply_weather: 'Clima al Momento de la Aplicación',
        modal_add_financa_title: 'Registrar Movimiento de Caja',
        label_fin_type: 'Tipo de Transacción',
        finance_type_expense: 'Egreso / Gasto del Establecimiento',
        finance_type_revenue: 'Ingreso / Cobro Financiero',
        label_fin_desc: 'Descripción del Movimiento',
        label_fin_category: 'Categoría de Costo',
        cat_fuel: 'Combustible (Gasoil)',
        cat_pesticides: 'Defensivos Insumos',
        cat_staff: 'Pago a Colaboradores / Jornal',
        cat_harvest: 'Cosecha / Venta de Granos',
        cat_other: 'Otras Operaciones',
        label_fin_plot: 'Lote Relacionado (Opcional)',
        plot_none: 'Movimiento General del Campo',
        label_fin_currency: 'Moneda',
        label_fin_pesticide: 'Insumo Relacionado',
        label_fin_qty: 'Cantidad Comprada (L / Kg)',
        pest_selector_title: 'Escanear Plagas por Foto',
        pest_selector_desc: 'Seleccione una de las fotos tomadas en el campo a continuación para obtener el diagnóstico inmediato de plagas vía AgriIA:',
        btn_upload_own_pic: 'Enviar Mi Propia Foto',
        active_status: 'Activo',
        idle_status: 'Inactivo',
        service_status: 'Taller',
        fuel_indicator: 'Combustible',
        last_action: 'Última acción',
        btn_treat_now: 'Tratar Lote Ahora',
        chart_title: 'Flujo de Caja Mensal',
        chart_subtitle: 'Comparativo de Ingresos vs Egresos (BRL)',
        distribution_title: 'Resumen por Categoría',
        distribution_subtitle: 'Gastos categorizados en BRL',
        nav_inventario: 'Inventario',
        tab_inventario: 'Invent.',
        inventario_title: 'Inventario de Stock',
        inventario_subtitle: 'Visión consolidada de todos los activos en stock: insumos, gasoil y granos cosechados.',
        inv_sect_pesticides: 'Defensivos Químicos',
        inv_sect_fuel: 'Combustible (Gasoil)',
        inv_sect_harvest: 'Granos Cosechados (Ingresos)',
        inv_sect_purchases: 'Historial de Compras',
        inv_total_pesticides: 'Total de Defensivos en Stock',
        inv_total_fuel: 'Nivel del Tanque Central',
        inv_total_harvest_value: 'Valor Total Cosechas',
        inv_low_stock_warning: 'Stock Bajo (< 100L)',
        inv_ok_stock: 'Stock OK',
        inv_item_name: 'Producto',
        inv_item_type: 'Tipo',
        inv_item_qty: 'Cantidad',
        inv_item_status: 'Estado',
        inv_item_cost: 'Costo de Adquisición',
        inv_no_data: 'Ningún ítem registrado en esta categoría.',
        label_pesticide_cost: 'Costo de Adquisición (Opcional)',
        label_pesticide_currency: 'Moneda del Costo',
        btn_delete_machine: 'Retirar Máquina',
        cfg_profile_header: 'Perfil del Productor',
        cfg_profile_picture: 'Foto o Logotipo',
        cfg_profile_picture_help: 'Suba una foto de su campo o seleccione uno de los íconos a continuación.',
        cfg_preset_avatars: 'Íconos Rápidos (Presets)',
        cfg_profile_name: 'Nombre del Productor / Campo',
        btn_save_profile: 'Guardar Perfil',
        cfg_system_header: 'Ajustes del Sistema',
        cfg_cloud_backup: 'Respaldo y Sincronización',
        btn_reset_database: 'Limpiar Toda la Base de Datos',
        btn_toggle_layout: 'Alternar Apariencia (Celular/Panel)',
        mach_planter: 'Plantadora / Sembradora',
        mach_truck: 'Camión',
        mach_trailer: 'Acoplado / Remolque',
        mach_pickup: 'Camioneta / Utilitario',
        mach_silage: 'Ensiladora',
        mach_spreader: 'Distribuidor de Cal/Abono',
        th_amount_converted: 'Equiv. BRL',
        nav_relatorios: 'Reportes & Análisis',
        tab_relatorios: 'Reportes',
        relatorios_title: 'Reportes & Análisis',
        relatorios_subtitle: 'Genere reportes de caja, insumos, gasoil, cosechas y registros.',
        btn_print: 'Imprimir Reporte',
        btn_generate: 'Generar Reporte',
        ai_command_placeholder: 'IA: "Reporte de gastos de caja en el lote 1 en mayo"',
        lbl_module: 'Módulo del Reporte',
        lbl_start_date: 'Fecha Inicial',
        lbl_end_date: 'Fecha Final',
        lbl_related_item: 'Filtro de Item Específico',
        lbl_quick_ranges: 'Períodos Rápidos',
        lbl_generate_ai: 'Ejecutar Comando IA',
        btn_execute: 'Ejecutar',
        report_empty: 'No se encontraron registros para los filtros seleccionados.',
        rep_total_revenue: 'Ingresos Totales',
        rep_total_expense: 'Egresos Totales',
        rep_net_balance: 'Saldo Neto',
        rep_total_liters: 'Gasoil Total (L)',
        rep_avg_consumption: 'Consumo Promedio (L)',
        rep_total_cost: 'Custo Total',
        rep_total_applied: 'Total Aplicado (L)',
        rep_avg_applied: 'Promedio por Aplicación (L)',
        rep_total_bags: 'Producción Total (Sacos)',
        rep_total_weight: 'Peso Estimado (Kg)',
        rep_count: 'Total Registrado',
        rep_active_plots: 'Lotes Activos',
        rep_active_machinery: 'Máquinas Activas',
        rep_active_staff: 'Personal Activo',
        rep_all: 'Todos',
        rep_mod_financeiro: 'Finanzas / Caja',
        rep_mod_insumos: 'Defensivos / Agroquímicos',
        rep_mod_combustivel: 'Consumo de Gasoil',
        rep_mod_producao: 'Cosechas y Producción',
        rep_mod_cadastros: 'Registros Generales (Activos)',
        rep_mod_frota: 'Flota y Maquinarias (Costos)',
        rep_mod_equipe: 'Personal y Colaboradores (Pagos/Costos)',
        rep_fleet_title: 'Reporte de Flota y Maquinarias',
        rep_staff_title: 'Reporte de Personal y Colaboradores',
        rep_fleet_kpi_fuel: 'Combustible Total',
        rep_fleet_kpi_maintenance: 'Mantenimiento y Repuestos',
        rep_fleet_kpi_total: 'Gasto Total Flota',
        rep_staff_kpi_total: 'Total Pagado (Personal)',
        rep_staff_kpi_clt: 'Mensualistas (CLT)',
        rep_staff_kpi_diarista: 'Jornaleros y Horistas',
        rep_th_machine: 'Vehículo / Máquina',
        rep_th_staff: 'Colaborador',
        rep_th_type: 'Tipo de Registro',
        rep_th_wage_type: 'Vínculo',
        rep_type_refuel: 'Abastecimiento',
        rep_type_maintenance: 'Mantenimiento',
        rep_type_repair: 'Reparación',
        rep_type_parts: 'Repuestos / Piezas'
    }
};

// ==================== 2. APPLICATION STATE (DATABASE) ====================
let currentLanguage = 'pt-BR';
let currentTheme = 'light';
let activeTab = 'dashboard';
let activeFinanceType = 'gasto'; // 'gasto' or 'receita'
let layoutMode = 'auto'; // 'auto', 'mobile', 'desktop'
let profileName = 'Produtor Rural';
let profileAvatar = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100';

// Supabase details
let supabaseClient = null;
let useSupabase = false;
let authSubscription = null;

// Production URL for OAuth redirects (Vercel deployment)
const PRODUCTION_URL = 'https://aurelius-agro.vercel.app';

// Initialize Supabase client using stored configuration or placeholders
function initializeSupabase() {
    const url = localStorage.getItem('supabase_url') || 'https://YOUR_SUPABASE_URL';
    const anonKey = localStorage.getItem('supabase_anon_key') || 'YOUR_SUPABASE_ANON_KEY';
    if (url && anonKey && url !== 'https://YOUR_SUPABASE_URL' && anonKey !== 'YOUR_SUPABASE_ANON_KEY') {
        supabaseClient = supabase.createClient(url, anonKey);
        useSupabase = true;
        console.log('Supabase client initialized');
    } else {
        console.warn('Supabase credentials not set. Skipping Supabase initialization.');
    }
}


// Process OAuth callback when URL contains tokens in the hash fragment
function processOAuthCallback() {
    if (!useSupabase || !supabaseClient) return;
    const hash = window.location.hash;
    if (hash) {
        const params = new URLSearchParams(hash.substring(1));
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');
        const expiresIn = params.get('expires_in');
        if (accessToken) {
            // Check if session is already active to avoid redundant, failing setSession calls
            supabaseClient.auth.getSession().then(({ data: { session } }) => {
                if (session) {
                    console.log('Session already active. Clearing hash fragment.');
                    window.location.hash = '';
                    document.getElementById('auth-screen')?.classList.add('hidden');
                    document.getElementById('app-container')?.classList.remove('hidden');
                    return;
                }
                
                // Fallback: set manually if not automatically recovered
                supabaseClient.auth.setSession({
                    access_token: accessToken,
                    refresh_token: refreshToken,
                    expires_in: Number(expiresIn)
                }).then(({ data, error }) => {
                    if (error) {
                        console.error('Failed to set Supabase session:', error);
                    } else {
                        // Clear hash to avoid reprocessing
                        window.location.hash = '';
                        // Hide auth screen and show main app UI
                        document.getElementById('auth-screen')?.classList.add('hidden');
                        document.getElementById('app-container')?.classList.remove('hidden');
                    }
                });
            });
        }
    }
}

// GPS and real-time weather variables
let userLatitude = null;
let userLongitude = null;
let useRealWeather = false;
let realLocationName = '';

// Default exchange rates (against 1 USD)
let exchangeRates = {
    USD: 1.0,
    BRL: 5.15,
    PYG: 7250.0
};

// Default seed database structure
const defaultDatabase = {
    plots: [],
    machinery: [],
    staff: [],
    fuelLogs: [],
    pesticides: [],
    pesticideMovements: [],
    applications: [],
    transactions: [],
    safras: [
        {
            id: 'safra-1',
            name: 'Safra Soja 2025/2026',
            start_date: '2025-01-01',
            end_date: '2026-06-30',
            status: 'Ativo'
        }
    ],
    seedsGrains: [],
    seedsGrainsProducts: [],
    seedsGrainsMovements: [],
    fuels: [],
    fuelMovements: []
};

// Application DB variable holding active records
let db = JSON.parse(JSON.stringify(defaultDatabase));

// ==================== 3. INITIALIZATION ====================
function startApp() {
    // Load local storage preferences if any
    try {
        loadPreferences();
    } catch (e) {
        console.error("Error loading preferences:", e);
    }
    
    // Initialize Local Database from localStorage
    try {
        initDatabase();
    initializeSupabase();
    processOAuthCallback();
    } catch (e) {
        console.error("Error initializing database:", e);
    }
    
    // Render entire UI elements
    try {
        renderAllViews();
    } catch (e) {
        console.error("Error rendering views:", e);
    }
    
    // Setup Responsive Auto-detection
    try {
        detectDeviceLayout();
        window.addEventListener('resize', detectDeviceLayout);
    } catch (e) {
        console.error("Error setting up device layout:", e);
    }
    
    // Start Weather Simulator (GPS & Real Weather logic will trigger)
    try {
        startWeatherSimulator();
    } catch (e) {
        console.error("Error starting weather simulator:", e);
    }
    
    // Trigger real weather fetch if enabled
    try {
        if (useRealWeather && userLatitude && userLongitude) {
            fetchRealLocationAndWeather().then(() => {
                const btnGps = document.getElementById('btn-gps-weather');
                if (btnGps) {
                    resetGPSButton(btnGps, btnGps.innerHTML, true);
                }
            }).catch(err => {
                console.error("Async weather load failed:", err);
            });
        }
    } catch (e) {
        console.error("Error triggering real weather fetch:", e);
    }
    
    // Setup financial pesticide fields toggle
    try {
        const finCategorySelect = document.getElementById('fin-category');
        if (finCategorySelect) {
            finCategorySelect.addEventListener('change', toggleFinanceInsumoFields);
        }
    } catch (e) {
        console.error("Error setting up finance fields toggle:", e);
    }
    
    // Setup dynamic form cost calculators
    try {
        setupFormEventListeners();
    } catch (e) {
        console.error("Error setting up form event listeners:", e);
    }
    
    // Fetch real-time exchange rates on startup
    try {
        updateExchangeRatesRealTime(true);
    } catch (e) {
        console.error("Error updating exchange rates:", e);
    }
    
    // Update exchange rates automatically every 10 minutes
    try {
        setInterval(() => {
            try {
                updateExchangeRatesRealTime(true);
            } catch (err) {
                console.error("Failed to sync exchange rates:", err);
            }
        }, 600000);
    } catch (e) {
        console.error("Error setting up exchange rates sync interval:", e);
    }
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

// Load preferences from local storage
function loadPreferences() {
    const savedProfileName = localStorage.getItem('agrimanage_profile_name');
    if (savedProfileName) {
        profileName = savedProfileName;
    }
    const savedProfileAvatar = localStorage.getItem('agrimanage_profile_avatar');
    if (savedProfileAvatar) {
        profileAvatar = savedProfileAvatar;
    }
    
    const savedLang = localStorage.getItem('agrimanage_lang');
    if (savedLang) {
        currentLanguage = savedLang;
    } else {
        // Auto-detect Brazilian Portuguese / Spanish
        const sysLang = navigator.language || '';
        if (sysLang.startsWith('es')) {
            currentLanguage = 'es-PY';
        }
    }
    setLanguage(currentLanguage);

    const savedTheme = localStorage.getItem('agrimanage_theme');
    if (savedTheme) {
        currentTheme = savedTheme;
    }
    applyTheme(currentTheme);

    const savedLayout = localStorage.getItem('agrimanage_layout');
    if (savedLayout) {
        layoutMode = savedLayout;
        forceLayoutMode(layoutMode);
    }
    
    // Load Saved Rates
    const savedRates = localStorage.getItem('agrimanage_rates');
    if (savedRates && savedRates !== 'null' && savedRates !== 'undefined') {
        try {
            const parsedRates = JSON.parse(savedRates);
            if (parsedRates && typeof parsedRates === 'object' && parsedRates.USD && parsedRates.BRL && parsedRates.PYG) {
                exchangeRates = parsedRates;
            }
        } catch (e) {
            console.error("Failed to parse agrimanage_rates:", e);
        }
    }
    
    // Load saved weather preferences
    const savedUseRealWeather = localStorage.getItem('agrimanage_use_real_weather');
    if (savedUseRealWeather === 'true') {
        useRealWeather = true;
        userLatitude = parseFloat(localStorage.getItem('agrimanage_user_lat'));
        userLongitude = parseFloat(localStorage.getItem('agrimanage_user_lon'));
        realLocationName = localStorage.getItem('agrimanage_real_location_name') || '';
    }
}

// Apply user profile elements across the UI
function applyUserProfile() {
    const userAvatar = document.getElementById('user-avatar');
    if (userAvatar) {
        userAvatar.src = profileAvatar;
    }
    const userName = document.getElementById('user-name');
    if (userName) {
        userName.textContent = profileName;
    }
    const cfgAvatarPreview = document.getElementById('cfg-profile-avatar-preview');
    if (cfgAvatarPreview) {
        cfgAvatarPreview.src = profileAvatar;
    }
    const cfgNameInput = document.getElementById('cfg-profile-name');
    if (cfgNameInput) {
        cfgNameInput.value = profileName;
    }
    updateWelcomeMessage();
}

// Select one of the high quality Unsplash quick preset avatars
function selectPresetAvatar(presetKey) {
    const presets = {
        'agriculture': 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=150',
        'potted_plant': 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=150',
        'grain': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=150',
        'home_work': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=150',
        'man_photo': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150',
        'woman_photo': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
    };

    if (presets[presetKey]) {
        profileAvatar = presets[presetKey];
        const preview = document.getElementById('cfg-profile-avatar-preview');
        if (preview) {
            preview.src = profileAvatar;
        }
    }
}

// Convert custom uploaded image file to base64 for offline durability
function handleProfileAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (file.size > 2 * 1024 * 1024) {
        alert(currentLanguage === 'pt-BR' ? 'A imagem deve ter no máximo 2MB.' : 'La imagen debe tener un máximo de 2MB.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        profileAvatar = e.target.result;
        const preview = document.getElementById('cfg-profile-avatar-preview');
        if (preview) {
            preview.src = profileAvatar;
        }
    };
    reader.readAsDataURL(file);
}

// Save and persist custom profile information
function saveUserProfile() {
    const cfgNameInput = document.getElementById('cfg-profile-name');
    if (cfgNameInput) {
        profileName = cfgNameInput.value.trim() || 'Produtor Rural';
    }
    
    localStorage.setItem('agrimanage_profile_name', profileName);
    localStorage.setItem('agrimanage_profile_avatar', profileAvatar);
    
    applyUserProfile();
    
    showToast(currentLanguage === 'pt-BR' ? 'Perfil atualizado com sucesso!' : '¡Perfil actualizado con éxito!');
}

// Reset database to active default seeding state
function resetLocalDatabase() {
    const confirmation = confirm(
        currentLanguage === 'pt-BR' 
            ? 'Tem certeza de que deseja limpar TODO o banco de dados local? Esta ação não pode ser desfeita.' 
            : '¿Está seguro de que desea borrar TODA la base de datos local? Esta acción no se puede deshacer.'
    );
    if (!confirmation) return;
    
    db = JSON.parse(JSON.stringify(defaultDatabase));
    saveDatabaseLocally();
    renderAllViews();
    
    showToast(
        currentLanguage === 'pt-BR'
            ? 'Banco de dados redefinido com sucesso!'
            : '¡Base de datos restablecida con éxito!'
    );
}

// Cycles layout modes between auto, mobile, and desktop
function toggleLayoutModeOffline() {
    let nextMode = 'auto';
    if (layoutMode === 'auto') {
        nextMode = 'mobile';
    } else if (layoutMode === 'mobile') {
        nextMode = 'desktop';
    } else {
        nextMode = 'auto';
    }
    
    forceLayoutMode(nextMode);
    
    let modeText = '';
    if (currentLanguage === 'pt-BR') {
        if (nextMode === 'auto') modeText = 'Detecção Automática';
        else if (nextMode === 'mobile') modeText = 'Aparência de Celular';
        else modeText = 'Aparência de Computador';
        showToast(`Layout alterado para: ${modeText}`);
    } else {
        if (nextMode === 'auto') modeText = 'Detección Automática';
        else if (nextMode === 'mobile') modeText = 'Diseño de Celular';
        else modeText = 'Diseño de Computadora';
        showToast(`Diseño cambiado a: ${modeText}`);
    }
}

// Handler for unified active ledger exchange pills
function setCurrencyDisplayFilter(currency, button) {
    const input = document.getElementById('currency-display-filter');
    if (input) {
        input.value = currency;
    }
    
    const pills = ['btn-currency-brl', 'btn-currency-usd', 'btn-currency-pyg'];
    pills.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el === button) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    });

    const th = document.querySelector('[data-i18n="th_amount_converted"]');
    if (th) {
        th.textContent = `Equiv. ${currency}`;
    }

    renderFinancialLedger();
}

// Save preferences to local storage
function saveExchangeRates() {
    const rateBrl = parseFloat(document.getElementById('cfg-rate-brl').value);
    const ratePyg = parseFloat(document.getElementById('cfg-rate-pyg').value);
    if (!isNaN(rateBrl) && rateBrl > 0 && !isNaN(ratePyg) && ratePyg > 0) {
        exchangeRates.BRL = rateBrl;
        exchangeRates.PYG = ratePyg;
        localStorage.setItem('agrimanage_rates', JSON.stringify(exchangeRates));
        
        // Update currency UI banners
        document.getElementById('ticker-brl-usd').textContent = rateBrl.toFixed(2);
        document.getElementById('ticker-pyg-usd').textContent = ratePyg.toLocaleString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { minimumFractionDigits: 0 });
        
        renderFinancialView();
        renderDashboard();
        
        showToast(currentLanguage === 'pt-BR' ? 'Taxas cambiais atualizadas com sucesso!' : '¡Tipos de cambio actualizados con éxito!');
    }
}

// Fetch real-time exchange rates from AwesomeAPI
async function updateExchangeRatesRealTime(silent = false) {
    const btnSync = document.getElementById('btn-sync-rates-realtime');
    let originalHtml = '';
    if (btnSync) {
        originalHtml = btnSync.innerHTML;
        btnSync.disabled = true;
        btnSync.querySelector('.material-symbols-outlined')?.classList.add('animate-spin');
    }

    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,USD-PYG');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        if (data && data.USDBRL && data.USDPYG) {
            const bidBrl = parseFloat(data.USDBRL.bid);
            const bidPyg = parseFloat(data.USDPYG.bid);

            if (!isNaN(bidBrl) && bidBrl > 0 && !isNaN(bidPyg) && bidPyg > 0) {
                exchangeRates.BRL = bidBrl;
                exchangeRates.PYG = bidPyg;
                localStorage.setItem('agrimanage_rates', JSON.stringify(exchangeRates));

                // Update configuration inputs if they exist
                const inputBrl = document.getElementById('cfg-rate-brl');
                const inputPyg = document.getElementById('cfg-rate-pyg');
                if (inputBrl) inputBrl.value = bidBrl.toFixed(2);
                if (inputPyg) inputPyg.value = Math.round(bidPyg);

                // Update currency UI banners in header
                const tickerBrl = document.getElementById('ticker-brl-usd');
                const tickerPyg = document.getElementById('ticker-pyg-usd');
                if (tickerBrl) tickerBrl.textContent = bidBrl.toFixed(2);
                if (tickerPyg) tickerPyg.textContent = Math.round(bidPyg).toLocaleString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY');

                // Re-render related finance calculations
                renderFinancialView();
                renderDashboard();

                if (!silent) {
                    showToast(currentLanguage === 'pt-BR' 
                        ? 'Cotações em tempo real atualizadas com sucesso!' 
                        : '¡Cotizaciones en tiempo real actualizadas con éxito!');
                }
            }
        }
    } catch (error) {
        console.error('Failed to fetch real-time exchange rates:', error);
        if (!silent) {
            showToast(currentLanguage === 'pt-BR'
                ? 'Não foi possível obter as taxas online. Usando valores locais.'
                : 'No se pudieron obtener las tasas en línea. Usando valores locales.', true);
        }
    } finally {
        if (btnSync) {
            btnSync.innerHTML = originalHtml;
            btnSync.disabled = false;
        }
    }
}

// Load database state
function initDatabase() {
    const storedDb = localStorage.getItem('agrimanage_db');
    if (storedDb && storedDb !== 'null' && storedDb !== 'undefined') {
        try {
            db = JSON.parse(storedDb);
        } catch (e) {
            console.error("Failed to parse agrimanage_db:", e);
            db = null;
        }
    }
    
    if (!db || typeof db !== 'object') {
        db = JSON.parse(JSON.stringify(defaultDatabase));
    }
    
    // Ensure all required database properties and structures exist as arrays
    if (!db.plots || !Array.isArray(db.plots)) db.plots = [];
    if (!db.machinery || !Array.isArray(db.machinery)) db.machinery = [];
    if (!db.staff || !Array.isArray(db.staff)) db.staff = [];
    if (!db.fuelLogs || !Array.isArray(db.fuelLogs)) db.fuelLogs = [];
    if (!db.pesticides || !Array.isArray(db.pesticides)) db.pesticides = [];
    if (!db.pesticideMovements || !Array.isArray(db.pesticideMovements)) db.pesticideMovements = [];
    if (!db.applications || !Array.isArray(db.applications)) db.applications = [];
    if (!db.transactions || !Array.isArray(db.transactions)) db.transactions = [];
    if (!db.seedsGrains || !Array.isArray(db.seedsGrains)) db.seedsGrains = [];
    if (!db.seedsGrainsProducts || !Array.isArray(db.seedsGrainsProducts)) db.seedsGrainsProducts = [];
    if (!db.seedsGrainsMovements || !Array.isArray(db.seedsGrainsMovements)) db.seedsGrainsMovements = [];
    if (!db.fuels || !Array.isArray(db.fuels)) db.fuels = [];
    if (!db.fuelMovements || !Array.isArray(db.fuelMovements)) db.fuelMovements = [];
    
    migratePesticideStockToMovements();
    migrateLegacyData();
    
    if (!db.safras || !Array.isArray(db.safras) || db.safras.length === 0) {
        db.safras = [
            {
                id: 'safra-1',
                name: 'Safra Soja 2025/2026',
                start_date: '2025-01-01',
                end_date: '2026-06-30',
                status: 'Ativo'
            }
        ];
    }
    
    // Save cleanly initialized database back to storage if it was empty or corrupted
    if (!storedDb || storedDb === 'null' || storedDb === 'undefined') {
        saveDatabaseLocally();
    }
    
    // Auto-detect and wipe mock data if present
    clearMockDataIfPresent();
    
    // Initialize Supabase settings
    // Prefer environment variables (Vite) with fallback to localStorage or defaults
    const envUrl = (import.meta && import.meta.env) ? import.meta.env.VITE_SUPABASE_URL : undefined;
    const envKey = (import.meta && import.meta.env) ? import.meta.env.VITE_SUPABASE_ANON_KEY : undefined;
    let sbUrl = envUrl || localStorage.getItem('agrimanage_sb_url');
    let sbKey = envKey || localStorage.getItem('agrimanage_sb_key');

    // Protect from stringified versions of null or undefined in localStorage
    if (sbUrl === 'null' || sbUrl === 'undefined') sbUrl = null;
    if (sbKey === 'null' || sbKey === 'undefined') sbKey = null;

    // If still missing, set default credentials
    if (!sbUrl) {
        sbUrl = "https://hfybdsvaymsgycqapgaw.supabase.co";
        localStorage.setItem('agrimanage_sb_url', sbUrl);
    }
    if (!sbKey) {
        sbKey = "sb_publishable_2NP2PoV9aC-ntr5ifhPJlQ_dRgblCMV";
        localStorage.setItem('agrimanage_sb_key', sbKey);
    }
    
    if (sbUrl && sbKey) {
        const urlInput = document.getElementById('cfg-supabase-url');
        const keyInput = document.getElementById('cfg-supabase-key');
        if (urlInput) urlInput.value = sbUrl;
        if (keyInput) keyInput.value = sbKey;
        
        const authUrlInput = document.getElementById('auth-sb-url');
        const authKeyInput = document.getElementById('auth-sb-key');
        if (authUrlInput) authUrlInput.value = sbUrl;
        if (authKeyInput) authKeyInput.value = sbKey;

        connectSupabaseClient(sbUrl, sbKey);
    }
}

function migratePesticideStockToMovements() {
    if (!db.pesticideMovements || !Array.isArray(db.pesticideMovements)) db.pesticideMovements = [];
    
    db.pesticides.forEach(p => {
        const hasMovements = db.pesticideMovements.some(m => m.pesticide_id === p.id);
        if (!hasMovements && p.stock_liters > 0) {
            db.pesticideMovements.push({
                id: 'mov-init-' + p.id + '-' + Date.now(),
                pesticide_id: p.id,
                type: 'entrada',
                date: new Date().toISOString().split('T')[0],
                quantity: p.stock_liters,
                unit_price: 0,
                total_cost: 0,
                currency: 'BRL',
                payment_date: '',
                description: currentLanguage === 'pt-BR' ? 'Estoque Inicial Migrado' : 'Stock Inicial Migrado'
            });
        }
    });
}

function migrateLegacyData() {
    if (!db.seedsGrainsProducts) db.seedsGrainsProducts = [];
    if (db.seedsGrainsProducts.length === 0) {
        db.seedsGrainsProducts.push(
            { id: 'sg-prod-def-1', name: 'Soja Convencional', category: 'Semente', unit: 'Sacas' },
            { id: 'sg-prod-def-2', name: 'Milho Safrinha', category: 'Grão', unit: 'Sacas' }
        );
    }
    if (!db.seedsGrainsMovements) db.seedsGrainsMovements = [];
    if (!db.fuels) db.fuels = [];
    if (!db.fuelMovements) db.fuelMovements = [];

    // Ensure default fuel exists
    if (db.fuels.length === 0) {
        db.fuels.push({
            id: 'fuel-diesel-s10',
            name: currentLanguage === 'pt-BR' ? 'Diesel S10' : 'Gasoil S10',
            capacity: 5000
        });
    }

    // Migrate seedsGrains to new model if seedsGrains contains legacy records
    if (db.seedsGrains && db.seedsGrains.length > 0 && db.seedsGrainsMovements.length === 0) {
        db.seedsGrains.forEach(item => {
            if (item.type && !item.product_id) {
                const cat = item.type === 'Grão Colhido' ? 'Grão' : 'Semente';
                let prod = db.seedsGrainsProducts.find(p => p.name === item.name && p.category === cat);
                if (!prod) {
                    prod = {
                        id: 'sg-prod-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
                        name: item.name,
                        category: cat,
                        unit: item.unit || 'Sacas'
                    };
                    db.seedsGrainsProducts.push(prod);
                }
                
                let subType = 'compra';
                if (item.type === 'Semente Tratada') subType = 'tratamento';
                if (item.type === 'Grão Colhido') subType = 'colheita';

                db.seedsGrainsMovements.push({
                    id: item.id,
                    product_id: prod.id,
                    type: 'entrada',
                    sub_type: subType,
                    date: item.date,
                    quantity: parseFloat(item.quantity) || 0,
                    unit_price: item.unit_price || 0,
                    total_cost: item.cost || 0,
                    currency: item.currency || 'BRL',
                    payment_type: 'À vista',
                    payment_date: item.date,
                    safra_id: item.safra_id || 'safra-1',
                    description: item.type + ': ' + item.name
                });
            }
        });
    }

    // Migrate fuelLogs to fuelMovements if fuelMovements is empty
    if (db.fuelLogs && db.fuelLogs.length > 0 && db.fuelMovements.length === 0) {
        db.fuelLogs.forEach(f => {
            if (!f.fuel_id) {
                const isEntry = f.cost_value > 0 || f.desc.toLowerCase().includes('reabastecimento') || f.desc.toLowerCase().includes('carga') || f.desc.toLowerCase().includes('compra');
                const qty = parseFloat(f.amount_liters) || 0;
                const cost = parseFloat(f.cost_value) || 0;
                
                db.fuelMovements.push({
                    id: f.id,
                    fuel_id: 'fuel-diesel-s10',
                    type: isEntry ? 'entrada' : 'saida',
                    date: f.date,
                    quantity: qty,
                    unit_price: qty > 0 ? (cost / qty) : 0,
                    total_cost: cost,
                    currency: f.currency || 'BRL',
                    payment_type: 'À vista',
                    payment_date: f.date,
                    machinery_id: f.machinery_id || '',
                    description: f.desc
                });
            }
        });
    }
}

function getPesticideStock(pesticideId) {
    if (!db.pesticideMovements) return 0;
    const entries = db.pesticideMovements.filter(m => m.pesticide_id === pesticideId && m.type === 'entrada');
    const exits = db.pesticideMovements.filter(m => m.pesticide_id === pesticideId && m.type === 'saida');
    const totalIn = entries.reduce((sum, m) => sum + (parseFloat(m.quantity) || 0), 0);
    const totalOut = exits.reduce((sum, m) => sum + (parseFloat(m.quantity) || 0), 0);
    return Math.max(0, totalIn - totalOut);
}

function renderMovementsList(pesticideId) {
    if (!db.pesticideMovements) return '';
    const movs = db.pesticideMovements.filter(m => m.pesticide_id === pesticideId);
    if (movs.length === 0) {
        return `<div class="text-[10px] text-on-surface-variant opacity-60 text-center py-2">${currentLanguage === 'pt-BR' ? 'Nenhuma movimentação' : 'Sin movimientos'}</div>`;
    }
    
    const sorted = [...movs].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
    
    let html = '';
    sorted.forEach(m => {
        const isEntrada = m.type === 'entrada';
        const typeBadge = isEntrada
            ? `<span class="text-primary font-bold text-[9px] bg-primary/10 px-1 rounded">IN</span>`
            : `<span class="text-error font-bold text-[9px] bg-error/10 px-1 rounded">OUT</span>`;
            
        const dateObj = new Date(m.date + 'T00:00:00');
        const dateStr = dateObj.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short' });
        
        let details = m.description || '';
        if (!details) {
            if (isEntrada) {
                details = currentLanguage === 'pt-BR' ? 'Entrada manual' : 'Entrada manual';
            } else {
                details = currentLanguage === 'pt-BR' ? 'Aplicação' : 'Aplicación';
            }
        }
        
        let costInfo = '';
        if (isEntrada && m.total_cost > 0) {
            costInfo = ` | <span class="font-data-numeral">${formatCurrency(m.total_cost, m.currency)}</span>`;
        }
        
        let dueInfo = '';
        if (isEntrada && m.payment_date) {
            const dueObj = new Date(m.payment_date + 'T00:00:00');
            const dueStr = dueObj.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short' });
            dueInfo = ` <span class="text-[9px] bg-surface-container-high px-1 rounded text-on-surface-variant" title="${currentLanguage === 'pt-BR' ? 'Vencimento / Pagamento' : 'Vencimiento / Pago'}">📅 ${dueStr}</span>`;
        }
        
        html += `
            <div class="flex items-center justify-between text-[11px] py-1 border-b border-outline-variant/30 gap-1">
                <div class="flex flex-col min-w-0">
                    <div class="flex items-center gap-1">
                        ${typeBadge}
                        <span class="font-semibold text-on-surface-variant font-data-numeral">${dateStr}</span>
                        <span class="font-bold text-on-surface truncate" title="${details}">${details}</span>
                    </div>
                    <div class="text-[10px] text-on-surface-variant/70 mt-0.5">
                        <span class="font-bold text-on-surface font-data-numeral">${m.quantity} L</span>${costInfo}${dueInfo}
                    </div>
                </div>
                <button class="text-on-surface-variant hover:text-error p-0.5 transition-colors shrink-0" onclick="deletePesticideMovement('${m.id}')" title="${currentLanguage === 'pt-BR' ? 'Excluir' : 'Eliminar'}">
                    <span class="material-symbols-outlined text-[14px]">delete</span>
                </button>
            </div>
        `;
    });
    return html;
}

function deletePesticideMovement(movId) {
    if (!db.pesticideMovements) return;
    const mov = db.pesticideMovements.find(m => m.id === movId);
    if (!mov) return;
    
    const confirmMsg = currentLanguage === 'pt-BR'
        ? `Remover esta movimentação de estoque permanentemente?`
        : `¿Eliminar este movimiento de stock permanentemente?`;
    if (!confirm(confirmMsg)) return;
    
    if (mov.type === 'saida' && mov.application_id) {
        deleteApplication(mov.application_id);
        return;
    }
    
    const txId = 'tx-' + movId;
    db.transactions = db.transactions.filter(t => t.id !== txId && t.movement_id !== movId);
    db.pesticideMovements = db.pesticideMovements.filter(m => m.id !== movId);
    
    const pest = db.pesticides.find(p => p.id === mov.pesticide_id);
    if (pest) {
        pest.stock_liters = getPesticideStock(pest.id);
    }
    
    saveDatabaseLocally();
    renderInsumosView();
    renderFinancialView();
    renderDashboard();
    renderInventarioView();
    populateSelectDropdowns();
    
    showToast(currentLanguage === 'pt-BR' ? 'Movimentação excluída!' : '¡Movimiento eliminado!');
}

function openAddEntradaModal(pestId) {
    const select = document.getElementById('entry-pesticide');
    if (select) {
        select.value = pestId;
    }
    const dateInput = document.getElementById('entry-date');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
    const qtyInput = document.getElementById('entry-qty');
    if (qtyInput) qtyInput.value = '';
    const unitPriceInput = document.getElementById('entry-unit-price');
    if (unitPriceInput) unitPriceInput.value = '';
    const totalCostInput = document.getElementById('entry-total-cost');
    if (totalCostInput) totalCostInput.value = '';
    const paymentDateInput = document.getElementById('entry-payment-date');
    if (paymentDateInput) paymentDateInput.value = '';
    
    // Reset payment type fields
    const paymentTypeSelect = document.getElementById('entry-payment-type');
    if (paymentTypeSelect) paymentTypeSelect.value = 'À vista';
    const dueDateGroup = document.getElementById('entry-due-date-group');
    if (dueDateGroup) dueDateGroup.style.display = 'none';

    openModal('modal-add-entrada-insumo');
}

function openAddSaidaModal(pestId) {
    const select = document.getElementById('apply-pesticide');
    if (select) {
        select.value = pestId;
    }
    openModal('modal-add-insumo-aplicacao');
}

function togglePesticideEntryDueDate() {
    const payType = document.getElementById('entry-payment-type').value;
    const group = document.getElementById('entry-due-date-group');
    if (group) {
        group.style.display = payType === 'A prazo' ? 'block' : 'none';
    }
}

function togglePesticideRegisterDueDate() {
    const payType = document.getElementById('pesticide-payment-type').value;
    const group = document.getElementById('pesticide-due-date-group');
    if (group) {
        group.style.display = payType === 'A prazo' ? 'block' : 'none';
    }
}

function handleFormSubmitPesticideEntry(e) {
    e.preventDefault();
    const pesticideId = document.getElementById('entry-pesticide').value;
    const entryDate = document.getElementById('entry-date').value;
    const qty = parseFloat(document.getElementById('entry-qty').value);
    const unitPrice = parseFloat(document.getElementById('entry-unit-price').value) || 0;
    const totalCost = parseFloat(document.getElementById('entry-total-cost').value) || 0;
    const currency = document.getElementById('entry-currency').value;
    const paymentType = document.getElementById('entry-payment-type').value;
    const paymentDate = document.getElementById('entry-payment-date').value;
    const autoTx = document.getElementById('entry-auto-tx').checked;
    
    if (pesticideId && qty > 0) {
        const pest = db.pesticides.find(p => p.id === pesticideId);
        if (!pest) return;
        
        const movId = 'mov-entry-' + Date.now();
        const txId = 'tx-' + movId;
        
        db.pesticideMovements.push({
            id: movId,
            pesticide_id: pesticideId,
            type: 'entrada',
            date: entryDate,
            quantity: qty,
            unit_price: unitPrice,
            total_cost: totalCost,
            currency,
            payment_type: paymentType,
            payment_date: paymentType === 'A prazo' ? paymentDate : entryDate,
            description: currentLanguage === 'pt-BR' ? 'Compra de Insumo' : 'Compra de Insumo'
        });
        
        if (autoTx && totalCost > 0) {
            db.transactions.unshift({
                id: txId,
                date: entryDate,
                type: 'gasto',
                description: `${currentLanguage === 'pt-BR' ? 'Compra de Insumo' : 'Compra de Insumo'}: ${pest.name}`,
                amount: totalCost,
                currency,
                category: 'Insumos',
                plot_id: '',
                pesticide_id: pesticideId,
                amount_purchased: qty,
                movement_id: movId,
                payment_type: paymentType,
                payment_status: paymentType === 'A prazo' ? 'pendente' : 'pago',
                due_date: paymentType === 'A prazo' ? paymentDate : ''
            });
        }
        
        pest.stock_liters = getPesticideStock(pesticideId);
        
        saveDatabaseLocally();
        closeModal('modal-add-entrada-insumo');
        renderInsumosView();
        renderInventarioView();
        if (autoTx && totalCost > 0) {
            renderFinancialView();
            renderDashboard();
        }
        populateSelectDropdowns();
        showToast(currentLanguage === 'pt-BR' ? 'Entrada registrada com sucesso!' : '¡Entrada registrada con éxito!');
    }
}

function payPendingTransaction(txId) {
    const tx = db.transactions.find(t => t.id === txId);
    if (tx) {
        tx.payment_status = 'pago';
        
        // Also update corresponding movement payment status if any
        if (tx.movement_id) {
            // Check pesticide movements
            const pm = db.pesticideMovements.find(m => m.id === tx.movement_id);
            if (pm) {
                pm.payment_type = 'À vista';
                pm.payment_date = new Date().toISOString().split('T')[0];
            }
            
            // Check seedsGrains movements
            if (db.seedsGrainsMovements) {
                const sgm = db.seedsGrainsMovements.find(m => m.id === tx.movement_id);
                if (sgm) {
                    sgm.payment_type = 'À vista';
                    sgm.payment_date = new Date().toISOString().split('T')[0];
                }
            }
            
            // Check fuel movements
            if (db.fuelMovements) {
                const fm = db.fuelMovements.find(m => m.id === tx.movement_id);
                if (fm) {
                    fm.payment_type = 'À vista';
                    fm.payment_date = new Date().toISOString().split('T')[0];
                }
            }
        }
        
        saveDatabaseLocally();
        renderFinancialView();
        renderDashboard();
        renderInsumosView();
        renderInventarioView();
        if (typeof renderSeedsGrains === 'function') renderSeedsGrains();
        if (typeof renderFuelView === 'function') renderFuelView();
        showToast(currentLanguage === 'pt-BR' ? 'Lançamento quitado com sucesso!' : '¡Transacción pagada con éxito!');
    }
}

function setupFormEventListeners() {
    const entryQtyInput = document.getElementById('entry-qty');
    const entryUnitPriceInput = document.getElementById('entry-unit-price');
    const entryTotalCostInput = document.getElementById('entry-total-cost');
    
    if (entryQtyInput && entryUnitPriceInput && entryTotalCostInput) {
        const recalcCost = () => {
            const qty = parseFloat(entryQtyInput.value) || 0;
            const price = parseFloat(entryUnitPriceInput.value) || 0;
            if (qty > 0 && price > 0) {
                entryTotalCostInput.value = (qty * price).toFixed(2);
            }
        };
        const recalcPrice = () => {
            const qty = parseFloat(entryQtyInput.value) || 0;
            const cost = parseFloat(entryTotalCostInput.value) || 0;
            if (qty > 0 && cost > 0) {
                entryUnitPriceInput.value = (cost / qty).toFixed(2);
            }
        };
        entryQtyInput.addEventListener('input', recalcCost);
        entryUnitPriceInput.addEventListener('input', recalcCost);
        entryTotalCostInput.addEventListener('input', recalcPrice);
    }
    
    const seedQtyInput = document.getElementById('seed-grain-qty');
    const seedCostType = document.getElementById('seed-grain-cost-type');
    const seedCalcFields = document.getElementById('seed-grain-cost-calc-fields');
    const seedUnitPrice = document.getElementById('seed-grain-unit-price');
    const seedArea = document.getElementById('seed-grain-area');
    const seedTotalCost = document.getElementById('seed-grain-cost');
    const seedUnitPriceLabel = document.getElementById('seed-grain-unit-price-label');
    const seedAreaGroup = document.getElementById('seed-grain-area-group');
    
    if (seedCostType && seedCalcFields && seedUnitPrice && seedArea && seedTotalCost) {
        const toggleCostFields = () => {
            const unitSelect = document.getElementById('seed-grain-unit');
            const unit = unitSelect ? unitSelect.value : 'Sacas';

            if (seedCalcFields) {
                seedCalcFields.classList.remove('hidden');
            }

            if (unit === 'Hectareas') {
                if (seedUnitPriceLabel) {
                    seedUnitPriceLabel.textContent = currentLanguage === 'pt-BR' ? 'Preço por Hectare' : 'Precio por Hectárea';
                }
                if (seedAreaGroup) {
                    seedAreaGroup.classList.remove('hidden');
                }
                if (seedArea) {
                    seedArea.setAttribute('required', 'true');
                }
            } else {
                if (seedUnitPriceLabel) {
                    seedUnitPriceLabel.textContent = currentLanguage === 'pt-BR' ? `Preço por ${unit}` : `Precio por ${unit}`;
                }
                if (seedAreaGroup) {
                    seedAreaGroup.classList.add('hidden');
                }
                if (seedArea) {
                    seedArea.removeAttribute('required');
                }
            }
            recalcSeedCost();
        };

        const recalcSeedCost = () => {
            const unitSelect = document.getElementById('seed-grain-unit');
            const unit = unitSelect ? unitSelect.value : 'Sacas';

            const qty = parseFloat(seedQtyInput.value) || 0;
            const price = parseFloat(seedUnitPrice.value) || 0;
            const area = parseFloat(seedArea.value) || 0;

            if (unit === 'Hectareas') {
                if (area > 0 && price > 0) {
                    seedTotalCost.value = (area * price).toFixed(2);
                }
            } else {
                if (qty > 0 && price > 0) {
                    seedTotalCost.value = (qty * price).toFixed(2);
                }
            }
        };

        seedCostType.addEventListener('change', toggleCostFields);
        const seedUnitSelect = document.getElementById('seed-grain-unit');
        if (seedUnitSelect) {
            seedUnitSelect.addEventListener('change', toggleCostFields);
        }
        seedQtyInput.addEventListener('input', recalcSeedCost);
        seedUnitPrice.addEventListener('input', recalcSeedCost);
        seedArea.addEventListener('input', recalcSeedCost);
    }
}

// Auto-detect and wipe mock data helper for a clean user profile
function clearMockDataIfPresent() {
    const hasMockPlots = db.plots && db.plots.some(p => p.id === 'plot-1' || p.id === 'plot-2' || p.id === 'plot-3');
    const hasMockMachinery = db.machinery && db.machinery.some(m => m.id === 'mach-1' || m.id === 'mach-2');
    const hasMockStaff = db.staff && db.staff.some(s => s.id === 'staff-1');
    const hasMockTx = db.transactions && db.transactions.some(t => t.id === 'tx-1' || t.id === 'tx-2');

    if (hasMockPlots || hasMockMachinery || hasMockStaff || hasMockTx) {
        console.log("Mock data detected in profile! Performing full cleanup for zeroed active state.");
        db = {
            plots: [],
            machinery: [],
            staff: [],
            fuelLogs: [],
            pesticides: [],
            pesticideMovements: [],
            applications: [],
            transactions: [],
            safras: [
                {
                    id: 'safra-1',
                    name: 'Safra Soja 2025/2026',
                    start_date: '2025-01-01',
                    end_date: '2026-06-30',
                    status: 'Ativo'
                }
            ],
            seedsGrains: [],
            seedsGrainsProducts: [],
            seedsGrainsMovements: [],
            fuels: [],
            fuelMovements: []
        };
        saveDatabaseLocally();
        renderAllViews();
    }
}

// Save active database to localStorage
function saveDatabaseLocally() {
    localStorage.setItem('agrimanage_db', JSON.stringify(db));
    if (useSupabase && supabaseClient) {
        syncDatabaseToCloud();
    }
}

// Toggle language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('agrimanage_lang', lang);
    
    // Toggle active classes on buttons
    document.querySelectorAll('.language-switch button').forEach(btn => btn.classList.remove('active'));
    const langPt = document.getElementById('lang-pt');
    const langEs = document.getElementById('lang-es');
    if (lang === 'pt-BR') {
        if (langPt) langPt.classList.add('active');
        document.documentElement.lang = 'pt';
    } else {
        if (langEs) langEs.classList.add('active');
        document.documentElement.lang = 'es';
    }
    
    // Translate all elements with [data-i18n]
    updateUIStrings();
    
    // Re-render UI elements because labels inside scripts changed
    // Re-render UI including Safras view
renderAllViews();
}

function updateUIStrings() {
    const langDict = translations[currentLanguage];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langDict[key]) {
            el.innerHTML = langDict[key];
        }
    });

    // Translate Placeholders
    const searchInput = document.querySelector('header input');
    if (searchInput) {
        searchInput.placeholder = currentLanguage === 'pt-BR' ? 'Buscar talhões, frotas...' : 'Buscar lotes, flota...';
    }

    // Set Welcome Header
    updateWelcomeMessage();
}

function updateWelcomeMessage() {
    const hours = new Date().getHours();
    let welcome = '';
    if (currentLanguage === 'pt-BR') {
        if (hours < 12) welcome = `Bom dia, ${profileName}!`;
        else if (hours < 18) welcome = `Boa tarde, ${profileName}!`;
        else welcome = `Boa noite, ${profileName}!`;
    } else {
        if (hours < 12) welcome = `¡Buen día, ${profileName}!`;
        else if (hours < 18) welcome = `¡Buenas tardes, ${profileName}!`;
        else welcome = `¡Buenas noches, ${profileName}!`;
    }
    const dashWelcome = document.getElementById('dash-welcome');
    if (dashWelcome) {
        dashWelcome.textContent = welcome;
    }
}

// Theme management
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    localStorage.setItem('agrimanage_theme', theme);
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconDark = themeToggle ? themeToggle.querySelector('.theme-icon-dark') : null;
    const themeIconLight = themeToggle ? themeToggle.querySelector('.theme-icon-light') : null;

    if (theme === 'dark') {
        htmlEl.classList.add('dark');
        bodyEl.classList.add('dark');
        if (themeIconDark && themeIconLight) {
            themeIconDark.classList.add('hidden');
            themeIconLight.classList.remove('hidden');
        }
    } else {
        htmlEl.classList.remove('dark');
        bodyEl.classList.remove('dark');
        if (themeIconDark && themeIconLight) {
            themeIconDark.classList.remove('hidden');
            themeIconLight.classList.add('hidden');
        }
    }
}

// Responsive layout handlers
function detectDeviceLayout() {
    if (layoutMode !== 'auto') return;
    
    const isDesktop = window.innerWidth >= 1024;
    const body = document.body;
    
    if (isDesktop) {
        body.classList.remove('layout-mobile');
        body.classList.add('layout-desktop');
    } else {
        body.classList.remove('layout-desktop');
        body.classList.add('layout-mobile');
    }
}

function forceLayoutMode(mode) {
    layoutMode = mode;
    localStorage.setItem('agrimanage_layout', mode);
    
    const body = document.body;
    body.classList.remove('layout-mobile', 'layout-desktop');
    
    if (mode === 'mobile') {
        body.classList.add('layout-mobile');
    } else if (mode === 'desktop') {
        body.classList.add('layout-desktop');
    } else {
        detectDeviceLayout();
    }
}

// Navigation Tab switcher
// Updated switchTab to handle safra tab
function switchTab(tabId) {
    activeTab = tabId;
    
    // Hide all tabs
    document.querySelectorAll('.tab-view').forEach(view => view.classList.remove('active'));
    
    // Show target tab
    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) {
        targetView.classList.add('active');
    }
    
    // Update active class in menus (sidebar & mobile tab bar)
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tabbar-item').forEach(btn => btn.classList.remove('active'));
    
    // Match Sidebar Buttons
    document.querySelectorAll('#desktop-sidebar nav button').forEach((btn, index) => {
        const tabs = ['dashboard', 'safras', 'talhoes', 'recursos', 'insumos', 'graos_sementes', 'financeiro', 'inventario', 'relatorios'];
        if (tabs[index] === tabId) {
            btn.classList.add('active');
        }
    });

    // Match Mobile Tab bar Buttons
    document.querySelectorAll('#mobile-tabbar button').forEach((btn, index) => {
        const tabs = ['dashboard', 'talhoes', 'recursos', 'insumos', 'financeiro', 'inventario', 'relatorios'];
        if (tabs[index] === tabId) {
            btn.classList.add('active');
        }
    });

    // Trigger inventory render when switching to that tab
    // Trigger safra view rendering
    if (tabId === 'inventario') {
        renderInventarioView();
        renderSeedsGrains();
    }
    if (tabId === 'safras') {
        renderSafrasView();
    }
    if (tabId === 'graos_sementes') {
        renderSeedsGrains();
    }
    if (tabId === 'relatorios') {
        initRelatoriosView();
    }

    // Close mobile side menu if open
    const sidebar = document.getElementById('desktop-sidebar');
    if (sidebar) sidebar.classList.remove('mobile-open');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (backdrop) backdrop.classList.add('hidden');
}

function switchSubTab(subTabId, element) {
    // Hide all sub-tabs
    const parent = element.parentElement;
    parent.querySelectorAll('.tab-subnav-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    const wrapper = parent.nextElementSibling.parentElement;
    wrapper.querySelectorAll('.sub-tab-content').forEach(content => content.classList.add('hidden'));
    
    const target = document.getElementById(subTabId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
}

function toggleSidebarMobile() {
    const sidebar = document.getElementById('desktop-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) {
        const isOpen = sidebar.classList.toggle('mobile-open');
        if (backdrop) {
            if (isOpen) {
                backdrop.classList.remove('hidden');
            } else {
                backdrop.classList.add('hidden');
            }
        }
    }
}

// ==================== GPS PERMISSION MODAL ====================
function showGPSPermissionModal() {
    const t = translations[currentLanguage];
    const modal = document.getElementById('modal-gps-permission');
    if (!modal) return;
    
    // Translate modal text
    const title = document.getElementById('gps-modal-title');
    const desc = document.getElementById('gps-modal-desc');
    const btnYes = document.getElementById('gps-modal-btn-yes');
    const btnNo = document.getElementById('gps-modal-btn-no');
    
    if (currentLanguage === 'es-PY') {
        if (title) title.textContent = '¿Activar Ubicación GPS?';
        if (desc) desc.textContent = 'Aurelius puede usar su ubicación real para mostrar el pronóstico del tiempo exacto de su campo. ¿Desea activar?';
        if (btnYes) btnYes.textContent = 'Sí, usar mi ubicación';
        if (btnNo) btnNo.textContent = 'No, usar ubicación predeterminada';
    } else {
        if (title) title.textContent = 'Ativar Localização GPS?';
        if (desc) desc.textContent = 'O Aurelius pode usar sua localização real para mostrar a previsão do tempo exata do seu campo. Deseja ativar?';
        if (btnYes) btnYes.textContent = 'Sim, usar minha localização';
        if (btnNo) btnNo.textContent = 'Não, usar localização padrão';
    }
    
    // Show modal with backdrop
    modal.classList.remove('hidden');
    openModal('modal-gps-permission');
}

function acceptGPSPermission() {
    localStorage.setItem('agrimanage_gps_asked', 'yes');
    closeModal('modal-gps-permission');
    // Trigger real GPS request
    requestGPSAndRealWeather();
}

function denyGPSPermission() {
    localStorage.setItem('agrimanage_gps_asked', 'no');
    closeModal('modal-gps-permission');
    showToast(currentLanguage === 'pt-BR'
        ? 'Usando localização padrão para o clima.'
        : 'Usando ubicación predeterminada para el clima.');
}

// ==================== 4. WEATHER & SENSORS SIMULATOR ====================
let weatherInterval = null;
let simulatedWindSpeed = 10;
let simulatedHumidity = 62;
let simulatedTemp = 24;

function startWeatherSimulator() {
    updateWeatherUI();
    // Simulate real agricultural climate changes
    weatherInterval = setInterval(() => {
        if (useRealWeather) return; // Ignore if using real weather from GPS
        simulatedWindSpeed = Math.floor(Math.random() * 12) + 6; // 6 to 18 km/h
        simulatedHumidity = Math.floor(Math.random() * 25) + 50; // 50 to 75%
        simulatedTemp = Math.floor(Math.random() * 6) + 21; // 21 to 27°C
        updateWeatherUI();
    }, 30000);
}

function updateWeatherUI() {
    const tempEl = document.getElementById('weather-temp');
    const windEl = document.getElementById('weather-wind');
    const humidityEl = document.getElementById('weather-humidity');
    const badgeEl = document.getElementById('weather-safety-badge');
    const badgeTxtEl = document.getElementById('weather-safety-text');
    
    if (tempEl) tempEl.textContent = `${simulatedTemp}°C`;
    if (windEl) windEl.textContent = `${simulatedWindSpeed} km/h`;
    if (humidityEl) humidityEl.textContent = `${simulatedHumidity}%`;
    
    // Evaluate pesticide spraying safety:
    // Ideal: Wind between 3 and 10 km/h, humidity > 55%. If wind > 15 km/h, pesticide drift risk is high!
    const isWindSafe = simulatedWindSpeed <= 14;
    const isHumiditySafe = simulatedHumidity <= 80;
    const isSafe = isWindSafe && isHumiditySafe;
    
    if (badgeEl && badgeTxtEl) {
        badgeEl.classList.remove('warning', 'success');
        if (isSafe) {
            badgeEl.classList.add('success');
            badgeTxtEl.textContent = currentLanguage === 'pt-BR' 
                ? 'Clima IDEAL para aplicação de defensivos' 
                : 'Clima IDEAL para la aplicación de defensivos';
            badgeEl.style.backgroundColor = 'var(--color-primary-container)';
            badgeEl.style.color = 'var(--color-on-primary-container)';
        } else {
            badgeEl.classList.add('warning');
            badgeTxtEl.textContent = currentLanguage === 'pt-BR' 
                ? `Risco de Deriva: Vento Forte (${simulatedWindSpeed} km/h)` 
                : `Riesgo de Deriva: Viento Fuerte (${simulatedWindSpeed} km/h)`;
            badgeEl.style.backgroundColor = 'var(--color-error-container)';
            badgeEl.style.color = 'var(--color-on-error-container)';
        }
    }

    // Load dates in headers
    const dashDate = document.getElementById('dash-date');
    if (dashDate) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        dashDate.textContent = new Date().toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', options);
    }
}

// GPS & Real-time Weather integrations (Nominatim & Open-Meteo)
async function requestGPSAndRealWeather() {
    const btnGps = document.getElementById('btn-gps-weather');
    let originalHtml = '';
    if (btnGps) {
        originalHtml = btnGps.innerHTML;
        btnGps.disabled = true;
        const icon = btnGps.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.textContent = 'autorenew';
            icon.classList.add('animate-spin');
        }
    }

    if (!navigator.geolocation) {
        showToast(currentLanguage === 'pt-BR' 
            ? 'Geolocalização não é suportada pelo seu navegador.' 
            : 'La geolocalización no es soportada por su navegador.', true);
        resetGPSButton(btnGps, originalHtml);
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            userLatitude = position.coords.latitude;
            userLongitude = position.coords.longitude;
            useRealWeather = true;

            // Salvar preferências
            localStorage.setItem('agrimanage_use_real_weather', 'true');
            localStorage.setItem('agrimanage_user_lat', userLatitude);
            localStorage.setItem('agrimanage_user_lon', userLongitude);

            showToast(currentLanguage === 'pt-BR' 
                ? 'Localização obtida com sucesso!' 
                : '¡Ubicación obtenida con éxito!');

            // Buscar geocodificação reversa e meteorologia
            await fetchRealLocationAndWeather();
            resetGPSButton(btnGps, originalHtml, true);
        },
        (error) => {
            console.error('Erro de Geolocalização:', error);
            let errMsg = currentLanguage === 'pt-BR' 
                ? 'Permissão de GPS negada ou indisponível.' 
                : 'Permiso de GPS denegado o no disponible.';
            if (error.code === error.PERMISSION_DENIED) {
                errMsg = currentLanguage === 'pt-BR' 
                    ? 'Acesso ao GPS foi negado pelo usuário.' 
                    : 'El acceso al GPS fue denegado por el usuario.';
            }
            showToast(errMsg, true);
            useRealWeather = false;
            localStorage.removeItem('agrimanage_use_real_weather');
            resetGPSButton(btnGps, originalHtml, false);
            updateWeatherUI(); // Volta para o simulador
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function resetGPSButton(btn, originalHtml, success = false) {
    if (!btn) return;
    btn.disabled = false;
    btn.innerHTML = originalHtml;
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) {
        icon.classList.remove('animate-spin');
        if (success) {
            icon.textContent = 'gps_fixed';
            btn.classList.remove('bg-primary/15', 'text-primary');
            btn.classList.add('bg-green-600/20', 'text-green-700', 'dark:text-green-400');
        } else {
            icon.textContent = 'my_location';
            btn.classList.add('bg-primary/15', 'text-primary');
            btn.classList.remove('bg-green-600/20', 'text-green-700', 'dark:text-green-400');
        }
    }
}

async function fetchRealLocationAndWeather() {
    if (!userLatitude || !userLongitude) return;

    // 1. Geocodificação Reversa (Nominatim)
    try {
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLatitude}&lon=${userLongitude}&zoom=10&addressdetails=1`, {
            headers: {
                'Accept-Language': currentLanguage === 'pt-BR' ? 'pt-BR,pt;q=0.9' : 'es-PY,es;q=0.9'
            }
        });
        if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            if (geoData && geoData.address) {
                const city = geoData.address.city || geoData.address.town || geoData.address.village || geoData.address.municipality || '';
                const state = geoData.address.state || '';
                const country = geoData.address.country || '';
                
                if (city) {
                    realLocationName = `${city}${state ? ', ' + state : ''}`;
                } else if (state) {
                    realLocationName = `${state}${country ? ', ' + country : ''}`;
                } else {
                    realLocationName = country || 'Sua Localização';
                }
            } else {
                realLocationName = 'Localização Real';
            }
        } else {
            realLocationName = 'Localização Real';
        }
    } catch (e) {
        console.error('Nominatim reverse geocode error:', e);
        realLocationName = 'Localização Real';
    }
    
    // Salvar o nome da localização real
    localStorage.setItem('agrimanage_real_location_name', realLocationName);

    // Atualizar UI da localização
    const locEl = document.getElementById('weather-location');
    if (locEl) locEl.textContent = realLocationName;

    // 2. Meteorologia Real (Open-Meteo)
    try {
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${userLatitude}&longitude=${userLongitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
        if (!weatherResponse.ok) throw new Error('Open-Meteo response not ok');
        const weatherData = await weatherResponse.json();

        if (weatherData && weatherData.current) {
            const temp = Math.round(weatherData.current.temperature_2m);
            const wind = Math.round(weatherData.current.wind_speed_10m);
            const humidity = Math.round(weatherData.current.relative_humidity_2m);
            const weatherCode = weatherData.current.weather_code;

            // Atualizar UI com dados reais
            updateWeatherUIReal(temp, wind, humidity, weatherCode);
        }
    } catch (e) {
        console.error('Open-Meteo weather fetch error:', e);
        showToast(currentLanguage === 'pt-BR' 
            ? 'Erro ao obter dados do clima real. Usando simulador.' 
            : 'Error al obtener datos de clima real. Usando simulador.', true);
        useRealWeather = false;
        updateWeatherUI();
    }
}

function mapWeatherCode(code) {
    const isPt = currentLanguage === 'pt-BR';
    let condition = isPt ? 'Ensolarado' : 'Soleado';
    let icon = 'sunny';

    if (code === 0) {
        condition = isPt ? 'Céu Limpo' : 'Cielo Despejado';
        icon = 'sunny';
    } else if (code >= 1 && code <= 3) {
        condition = isPt ? 'Parcialmente Nublado' : 'Parcialmente Nublado';
        icon = 'partly_cloudy_day';
        if (code === 3) {
            condition = isPt ? 'Encoberto' : 'Nublado';
            icon = 'cloud';
        }
    } else if (code === 45 || code === 48) {
        condition = isPt ? 'Nevoeiro' : 'Niebla';
        icon = 'foggy';
    } else if (code === 51 || code === 53 || code === 55) {
        condition = isPt ? 'Chuvisco' : 'Llovizna';
        icon = 'rainy_light';
    } else if (code === 61 || code === 63 || code === 65) {
        condition = isPt ? 'Chuva' : 'Lluvia';
        icon = 'rainy';
        if (code === 65) {
            condition = isPt ? 'Chuva Forte' : 'Lluvia Fuerte';
            icon = 'rainy_heavy';
        }
    } else if (code === 80 || code === 81 || code === 82) {
        condition = isPt ? 'Pancadas de Chuva' : 'Chubascos';
        icon = 'rainy_heavy';
    } else if (code >= 95) {
        condition = isPt ? 'Tempestade' : 'Tormenta';
        icon = 'thunderstorm';
    } else if (code >= 71 && code <= 77) {
        condition = isPt ? 'Neve' : 'Nieve';
        icon = 'snowing';
    }

    return { condition, icon };
}

function updateWeatherUIReal(temp, wind, humidity, weatherCode) {
    const tempEl = document.getElementById('weather-temp');
    const windEl = document.getElementById('weather-wind');
    const humidityEl = document.getElementById('weather-humidity');
    const badgeEl = document.getElementById('weather-safety-badge');
    const badgeTxtEl = document.getElementById('weather-safety-text');
    const condEl = document.getElementById('weather-condition');
    const iconEl = document.getElementById('weather-icon');
    
    if (tempEl) tempEl.textContent = `${temp}°C`;
    if (windEl) windEl.textContent = `${wind} km/h`;
    if (humidityEl) humidityEl.textContent = `${humidity}%`;
    
    // Mapear condição e ícone
    const mapped = mapWeatherCode(weatherCode);
    if (condEl) {
        condEl.textContent = mapped.condition;
        condEl.removeAttribute('data-i18n');
    }
    if (iconEl) {
        iconEl.textContent = mapped.icon;
    }
    
    const isWindSafe = wind <= 14;
    const isHumiditySafe = humidity <= 80;
    const isSafe = isWindSafe && isHumiditySafe;
    
    if (badgeEl && badgeTxtEl) {
        badgeEl.classList.remove('warning', 'success');
        if (isSafe) {
            badgeEl.classList.add('success');
            badgeTxtEl.textContent = currentLanguage === 'pt-BR' 
                ? 'Clima IDEAL para aplicação de defensivos' 
                : 'Clima IDEAL para la aplicación de defensivos';
            badgeEl.style.backgroundColor = 'var(--color-primary-container)';
            badgeEl.style.color = 'var(--color-on-primary-container)';
        } else {
            badgeEl.classList.add('warning');
            badgeTxtEl.textContent = currentLanguage === 'pt-BR' 
                ? `Risco de Deriva: Vento Forte (${wind} km/h)` 
                : `Riesgo de Deriva: Viento Fuerte (${wind} km/h)`;
            badgeEl.style.backgroundColor = 'var(--color-error-container)';
            badgeEl.style.color = 'var(--color-on-error-container)';
        }
    }
}

// ==================== 5. MOTOR CAMBIAL (CURRENCY CALCULATORS) ====================

// Base converts USD value to other currencies
function convertFrom(currency) {
    const calcUsd = document.getElementById('calc-usd');
    const calcBrl = document.getElementById('calc-brl');
    const calcPyg = document.getElementById('calc-pyg');
    
    if (currency === 'USD') {
        const val = parseFloat(calcUsd.value);
        if (isNaN(val)) {
            calcBrl.value = '';
            calcPyg.value = '';
            return;
        }
        calcBrl.value = (val * exchangeRates.BRL).toLocaleString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        calcPyg.value = Math.round(val * exchangeRates.PYG).toLocaleString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY');
    } else if (currency === 'BRL') {
        const raw = calcBrl.value.replace(/\./g, '').replace(/,/g, '.');
        const val = parseFloat(raw);
        if (isNaN(val)) {
            calcUsd.value = '';
            calcPyg.value = '';
            return;
        }
        const usdVal = val / exchangeRates.BRL;
        calcUsd.value = usdVal.toFixed(2);
        calcPyg.value = Math.round(usdVal * exchangeRates.PYG).toLocaleString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY');
    } else if (currency === 'PYG') {
        const raw = calcPyg.value.replace(/\./g, '').replace(/,/g, '.');
        const val = parseFloat(raw);
        if (isNaN(val)) {
            calcUsd.value = '';
            calcBrl.value = '';
            return;
        }
        const usdVal = val / exchangeRates.PYG;
        calcUsd.value = usdVal.toFixed(2);
        calcBrl.value = (usdVal * exchangeRates.BRL).toLocaleString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}

// Converts any value in standard currency to display currency
function convertValue(amount, fromCurrency, toCurrency) {
    // 1. Convert to USD baseline first
    const usdValue = amount / exchangeRates[fromCurrency];
    // 2. Convert to Target Currency
    return usdValue * exchangeRates[toCurrency];
}

// Format currency standard strings helper
function formatCurrency(amount, currency) {
    const locale = currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY';
    if (currency === 'USD') {
        return amount.toLocaleString(locale, { style: 'currency', currency: 'USD' });
    } else if (currency === 'BRL') {
        return amount.toLocaleString(locale, { style: 'currency', currency: 'BRL' });
    } else {
        // Paraguay Guaranies has no decimals!
        return '₲ ' + Math.round(amount).toLocaleString(locale);
    }
}

// ==================== 6. SUPABASE CLIENT & AUTH CONTROLLER ====================
let isSignUpMode = false;




function toggleAuthMode(event) {
    if (event) event.preventDefault();
    isSignUpMode = !isSignUpMode;
    
    const submitBtn = document.getElementById('auth-submit-btn');
    const submitTxt = document.getElementById('auth-submit-text');
    const toggleBtn = document.getElementById('auth-toggle-btn');
    const iconEl = submitBtn ? submitBtn.querySelector('.material-symbols-outlined') : null;
    
    if (isSignUpMode) {
        if (submitTxt) {
            submitTxt.textContent = currentLanguage === 'pt-BR' ? 'Criar Conta no Supabase' : 'Crear Cuenta en Supabase';
            submitTxt.setAttribute('data-i18n', 'btn_signup');
        }
        if (toggleBtn) {
            toggleBtn.textContent = currentLanguage === 'pt-BR' ? 'Já tem uma conta? Entrar' : '¿Ya tiene una cuenta? Ingresar';
            toggleBtn.setAttribute('data-i18n', 'auth_toggle_login');
        }
        if (iconEl) iconEl.textContent = 'person_add';
    } else {
        if (submitTxt) {
            submitTxt.textContent = currentLanguage === 'pt-BR' ? 'Entrar no Sistema' : 'Ingresar al Sistema';
            submitTxt.setAttribute('data-i18n', 'btn_login');
        }
        if (toggleBtn) {
            toggleBtn.textContent = currentLanguage === 'pt-BR' ? 'Criar nova conta (Registrar)' : 'Crear nueva cuenta (Registrar)';
            toggleBtn.setAttribute('data-i18n', 'auth_toggle_signup');
        }
        if (iconEl) iconEl.textContent = 'login';
    }
}

async function handleAuthSubmit(event) {
    event && event.preventDefault();
    const emailEl = document.getElementById('auth-email');
    const passwordEl = document.getElementById('auth-password');
    const email = emailEl ? emailEl.value.trim() : '';
    const password = passwordEl ? passwordEl.value : '';
    if (!email || !password) {
        showToast(currentLanguage === 'pt-BR' ? 'Preencha e-mail e senha.' : 'Fill email and password.', true);
        return;
    }
    if (!supabaseClient) {
        showToast(currentLanguage === 'pt-BR' ? 'Supabase não configurado.' : 'Supabase not configured.', true);
        return;
    }
    try {
        let sessionUser = null;
        if (isSignUpMode) {
            const { data, error } = await supabaseClient.auth.signUp({ email, password });
            if (error) throw error;
            sessionUser = data.user;
            
            // If email confirmation is required (session is null)
            if (data.user && !data.session) {
                showToast(currentLanguage === 'pt-BR' 
                    ? 'Conta criada! Confirme seu e-mail na sua caixa de entrada para entrar.' 
                    : '¡Cuenta creada! Confirme su correo en su bandeja de entrada para ingresar.');
                // Switch back to login mode
                toggleAuthMode();
                return;
            }
        } else {
            const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
            if (error) throw error;
            sessionUser = data.user;
        }
        
        if (sessionUser) {
            document.getElementById('user-name').textContent = sessionUser.email.split('@')[0];
            document.getElementById('auth-screen').classList.add('hidden');
            document.getElementById('app-container').classList.remove('hidden');
            await fetchDatabaseFromCloud(sessionUser.id);
            // Reset to login mode
            isSignUpMode = false;
            const toggleBtn = document.getElementById('auth-toggle-btn');
            if (toggleBtn) {
                toggleBtn.textContent = currentLanguage === 'pt-BR' ? 'Criar nova conta (Registrar)' : 'Crear nueva cuenta (Registrar)';
                toggleBtn.setAttribute('data-i18n', 'auth_toggle_signup');
            }
        }
    } catch (err) {
        console.error('Auth error:', err);
        const msg = currentLanguage === 'pt-BR' ? `Erro de autenticação: ${err.message}` : `Authentication error: ${err.message}`;
        showToast(msg, true);
    }
}

function updateCloudSyncUI(state) {
    const iconEl = document.getElementById('cloud-sync-icon');
    const iconMobileEl = document.getElementById('cloud-sync-icon-mobile');
    const textEl = document.getElementById('cloud-sync-text');
    if (!iconEl) return;
    
    iconEl.className = 'material-symbols-outlined text-[14px]';
    iconEl.classList.remove('animate-spin', 'animate-pulse');
    if (iconMobileEl) {
        iconMobileEl.className = 'material-symbols-outlined text-[20px]';
        iconMobileEl.classList.remove('animate-spin', 'animate-pulse');
    }
    
    if (state === 'local') {
        iconEl.textContent = 'cloud_off';
        iconEl.style.color = 'var(--color-outline)';
        if (iconMobileEl) { iconMobileEl.textContent = 'cloud_off'; iconMobileEl.style.color = 'var(--color-outline)'; }
        if (textEl) { textEl.textContent = currentLanguage === 'pt-BR' ? 'Modo Local' : 'Modo Local'; textEl.setAttribute('data-i18n', 'cloud_status_local'); }
    } else if (state === 'syncing') {
        iconEl.textContent = 'sync';
        iconEl.classList.add('animate-spin');
        iconEl.style.color = 'var(--color-primary)';
        if (iconMobileEl) { iconMobileEl.textContent = 'sync'; iconMobileEl.classList.add('animate-spin'); iconMobileEl.style.color = 'var(--color-primary)'; }
        if (textEl) { textEl.textContent = currentLanguage === 'pt-BR' ? 'Sincronizando...' : 'Sincronizando...'; textEl.setAttribute('data-i18n', 'cloud_status_syncing'); }
    } else if (state === 'synced') {
        iconEl.textContent = 'cloud_done';
        iconEl.style.color = 'var(--color-primary)';
        if (iconMobileEl) { iconMobileEl.textContent = 'cloud_done'; iconMobileEl.style.color = 'var(--color-primary)'; }
        if (textEl) { textEl.textContent = currentLanguage === 'pt-BR' ? 'Sincronizado' : 'Sincronizado'; textEl.setAttribute('data-i18n', 'cloud_status_synced'); }
    }
}

async function checkSessionAndSync() {
    if (!supabaseClient) return;
    try {
        const { data: { user } } = await supabaseClient.auth.getUser();
        if (user) {
            document.getElementById('user-name').textContent = user.email.split('@')[0];
            document.getElementById('auth-screen').classList.add('hidden');
            document.getElementById('app-container').classList.remove('hidden');
            await fetchDatabaseFromCloud(user.id);
            // Show GPS modal once
            setTimeout(() => {
                if (!localStorage.getItem('agrimanage_gps_asked')) showGPSPermissionModal();
            }, 1200);
        }
    } catch (err) {
        console.error("Session check error:", err);
    }
}

async function fetchDatabaseFromCloud(userId) {
    if (!supabaseClient || !useSupabase) return;
    updateCloudSyncUI('syncing');
    try {
        const { data, error } = await supabaseClient
            .from('agrimanage_data')
            .select('data')
            .eq('user_id', userId)
            .single();
            
        let userEmail = '';
        try {
            const { data: { user } } = await supabaseClient.auth.getUser();
            if (user) userEmail = user.email;
        } catch(e) {}
            
        if (error) {
            if (error.code === 'PGRST116') {
                console.log("No remote database found. Creating remote entry with seed data...");
                if (userEmail === 'marcos@agro.com') {
                    db = {
                        plots: [],
                        machinery: [],
                        staff: [],
                        fuelLogs: [],
                        pesticides: [],
                        pesticideMovements: [],
                        applications: [],
                        transactions: [],
                        purged: true,
                        safras: [
                            {
                                id: 'safra-1',
                                name: 'Safra Soja 2025/2026',
                                start_date: '2025-01-01',
                                end_date: '2026-06-30',
                                status: 'Ativo'
                            }
                        ],
                        seedsGrains: [],
                        seedsGrainsProducts: [],
                        seedsGrainsMovements: [],
                        fuels: [],
                        fuelMovements: []
                    };
                }
                await supabaseClient
                    .from('agrimanage_data')
                    .insert({ user_id: userId, data: db });
                updateCloudSyncUI('synced');
            } else if (error.code === 'PGRST205' || error.code === '42P01') {
                console.warn("Supabase table 'agrimanage_data' does not exist in schema. Gracefully falling back to local mode.");
                showToast(currentLanguage === 'pt-BR' 
                    ? 'Erro: Tabela "agrimanage_data" ausente no banco de dados Supabase!' 
                    : 'Error: ¡Tabla "agrimanage_data" ausente en la base de datos de Supabase!', true);
                updateCloudSyncUI('local');
            } else {
                console.error("Error fetching database from cloud:", error);
                showToast("Erro ao carregar dados da nuvem!", true);
                updateCloudSyncUI('local');
            }
        } else if (data && data.data) {
            db = data.data;
            
            // Ensure all properties exist in the database fetched from cloud
            if (!db || typeof db !== 'object') {
                db = JSON.parse(JSON.stringify(defaultDatabase));
            }
            if (!db.plots || !Array.isArray(db.plots)) db.plots = [];
            if (!db.machinery || !Array.isArray(db.machinery)) db.machinery = [];
            if (!db.staff || !Array.isArray(db.staff)) db.staff = [];
            if (!db.fuelLogs || !Array.isArray(db.fuelLogs)) db.fuelLogs = [];
            if (!db.pesticides || !Array.isArray(db.pesticides)) db.pesticides = [];
            if (!db.pesticideMovements || !Array.isArray(db.pesticideMovements)) db.pesticideMovements = [];
            if (!db.applications || !Array.isArray(db.applications)) db.applications = [];
            if (!db.transactions || !Array.isArray(db.transactions)) db.transactions = [];
            if (!db.seedsGrains || !Array.isArray(db.seedsGrains)) db.seedsGrains = [];
            if (!db.seedsGrainsProducts || !Array.isArray(db.seedsGrainsProducts)) db.seedsGrainsProducts = [];
            if (!db.seedsGrainsMovements || !Array.isArray(db.seedsGrainsMovements)) db.seedsGrainsMovements = [];
            if (!db.fuels || !Array.isArray(db.fuels)) db.fuels = [];
            if (!db.fuelMovements || !Array.isArray(db.fuelMovements)) db.fuelMovements = [];
            
            migratePesticideStockToMovements();
            if (!db.safras || !Array.isArray(db.safras) || db.safras.length === 0) {
                db.safras = [
                    {
                        id: 'safra-1',
                        name: 'Safra Soja 2025/2026',
                        start_date: '2025-01-01',
                        end_date: '2026-06-30',
                        status: 'Ativo'
                    }
                ];
            }

            if (userEmail === 'marcos@agro.com' && !db.purged) {
                console.log("marcos@agro.com detected and db not purged. Purging database now!");
                db = {
                    plots: [],
                    machinery: [],
                    staff: [],
                    fuelLogs: [],
                    pesticides: [],
                    pesticideMovements: [],
                    applications: [],
                    transactions: [],
                    purged: true,
                    safras: [
                        {
                            id: 'safra-1',
                            name: 'Safra Soja 2025/2026',
                            start_date: '2025-01-01',
                            end_date: '2026-06-30',
                            status: 'Ativo'
                        }
                    ],
                    seedsGrains: [],
                    seedsGrainsProducts: [],
                    seedsGrainsMovements: [],
                    fuels: [],
                    fuelMovements: []
                };
                localStorage.setItem('agrimanage_db', JSON.stringify(db));
                await syncDatabaseToCloud();
            } else {
                clearMockDataIfPresent();
                localStorage.setItem('agrimanage_db', JSON.stringify(db));
            }
            renderAllViews();
            updateCloudSyncUI('synced');
            console.log("Database pulled from Supabase!");
        }
    } catch (err) {
        console.error("Cloud fetch exception:", err);
        updateCloudSyncUI('local');
    }
}

async function syncDatabaseToCloud() {
    if (!supabaseClient || !useSupabase) {
        updateCloudSyncUI('local');
        return;
    }
    try {
        const { data: { user } } = await supabaseClient.auth.getUser();
        if (!user) {
            updateCloudSyncUI('local');
            return;
        }
        
        updateCloudSyncUI('syncing');
        const { error } = await supabaseClient
            .from('agrimanage_data')
            .upsert({ 
                user_id: user.id, 
                data: db,
                updated_at: new Date()
            }, { onConflict: 'user_id' });
            
        if (error) {
            console.error("Cloud database sync error:", error);
            if (error.code === 'PGRST205' || error.code === '42P01') {
                showToast(currentLanguage === 'pt-BR' 
                    ? 'Erro de Sincronização: Tabela "agrimanage_data" ausente no Supabase!' 
                    : 'Error de Sincronización: ¡Tabla "agrimanage_data" ausente en Supabase!', true);
            } else {
                showToast(currentLanguage === 'pt-BR' 
                    ? 'Erro ao sincronizar dados com o Supabase!' 
                    : '¡Error al sincronizar datos con Supabase!', true);
            }
            updateCloudSyncUI('local');
        } else {
            updateCloudSyncUI('synced');
            console.log("Database synced to Supabase!");
        }
    } catch (err) {
        console.error("Cloud sync exception:", err);
        updateCloudSyncUI('local');
    }
}

function connectSupabaseClient(url, key, retries = 5) {
    try {
        if (!url || !key) return;
        if (!window.supabase) {
            if (retries > 0) {
                console.log(`Supabase library not loaded yet. Retrying connection in 500ms... (${retries} retries left)`);
                setTimeout(() => connectSupabaseClient(url, key, retries - 1), 500);
                return;
            }
            console.warn("Supabase library not loaded. Falling back to local mode.");
            useSupabase = false;
            supabaseClient = null;
            updateCloudSyncUI('local');
            return;
        }
        
        // Unsubscribe from any active subscription first to avoid duplicate handlers
        if (authSubscription) {
            try {
                if (typeof authSubscription.unsubscribe === 'function') {
                    authSubscription.unsubscribe();
                }
            } catch (err) {
                console.warn("Error unsubscribing active auth session listener:", err);
            }
            authSubscription = null;
        }

        supabaseClient = window.supabase.createClient(url, key);
        useSupabase = true;
        document.getElementById('demo-banner').classList.add('hidden');
        document.getElementById('btn-disconnect-sb').classList.remove('hidden');
        console.log("Supabase Client Linked Successfully!");
        updateCloudSyncUI('synced');
        
        // Listen reactively to auth state changes (crucial for seamless Google/GitHub OAuth redirects)
        const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
            console.log("Supabase Auth State Transition:", event, session ? "User active" : "No session");
            if (session?.user) {
                const nameEl = document.getElementById('user-name');
                if (nameEl) nameEl.textContent = session.user.email.split('@')[0];
                
                const authEl = document.getElementById('auth-screen');
                const appEl = document.getElementById('app-container');
                if (authEl) authEl.classList.add('hidden');
                if (appEl) appEl.classList.remove('hidden');
                
                await fetchDatabaseFromCloud(session.user.id);
                
                // Show GPS permission modal once
                setTimeout(() => {
                    if (!localStorage.getItem('agrimanage_gps_asked')) showGPSPermissionModal();
                }, 1200);
            } else if (event === 'SIGNED_OUT') {
                const authEl = document.getElementById('auth-screen');
                const appEl = document.getElementById('app-container');
                if (appEl) appEl.classList.add('hidden');
                if (authEl) authEl.classList.remove('hidden');
                updateCloudSyncUI('local');
            }
        });
        authSubscription = subscription;
        
        // Run initial session check
        checkSessionAndSync();
    } catch (e) {
        console.error("Supabase failed connection:", e);
        showToast("Conexão Supabase falhou!", true);
        updateCloudSyncUI('local');
    }
}

function saveSupabaseSettings() {
    const url = document.getElementById('cfg-supabase-url').value.trim();
    const key = document.getElementById('cfg-supabase-key').value.trim();
    
    if (!url || !key) {
        showToast(currentLanguage === 'pt-BR' ? 'Preencha a URL e a Chave Anon!' : '¡Complete la URL y la Llave Anon!', true);
        return;
    }
    
    localStorage.setItem('agrimanage_sb_url', url);
    localStorage.setItem('agrimanage_sb_key', key);
    connectSupabaseClient(url, key);
    
    showToast(currentLanguage === 'pt-BR' ? 'Configurações salvas. Supabase conectado!' : '¡Ajustes guardados. Supabase conectado!');
    switchTab('dashboard');
}

function toggleAuthSupabaseDrawer() {
    const drawer = document.getElementById('auth-supabase-drawer');
    if (!drawer) return;
    drawer.classList.toggle('hidden');
    
    // Fill current URL and Key values in drawer fields
    if (!drawer.classList.contains('hidden')) {
        const envUrl = (import.meta && import.meta.env) ? import.meta.env.VITE_SUPABASE_URL : undefined;
        const envKey = (import.meta && import.meta.env) ? import.meta.env.VITE_SUPABASE_ANON_KEY : undefined;
        let sbUrl = envUrl || localStorage.getItem('agrimanage_sb_url') || "https://hfybdsvaymsgycqapgaw.supabase.co";
        let sbKey = envKey || localStorage.getItem('agrimanage_sb_key') || "sb_publishable_2NP2PoV9aC-ntr5ifhPJlQ_dRgblCMV";
        
        if (sbUrl === 'null' || sbUrl === 'undefined') sbUrl = '';
        if (sbKey === 'null' || sbKey === 'undefined') sbKey = '';
        
        document.getElementById('auth-sb-url').value = sbUrl;
        document.getElementById('auth-sb-key').value = sbKey;
    }
}

function saveAuthSupabaseSettings() {
    const url = document.getElementById('auth-sb-url').value.trim();
    const key = document.getElementById('auth-sb-key').value.trim();
    
    if (!url || !key) {
        showToast(currentLanguage === 'pt-BR' ? 'Preencha a URL e a Chave Anon!' : '¡Complete la URL y la Llave Anon!', true);
        return;
    }
    
    localStorage.setItem('agrimanage_sb_url', url);
    localStorage.setItem('agrimanage_sb_key', key);
    
    // Pre-fill the interior settings fields too
    const cfgUrlEl = document.getElementById('cfg-supabase-url');
    const cfgKeyEl = document.getElementById('cfg-supabase-key');
    if (cfgUrlEl) cfgUrlEl.value = url;
    if (cfgKeyEl) cfgKeyEl.value = key;
    
    connectSupabaseClient(url, key);
    
    showToast(currentLanguage === 'pt-BR' ? 'Servidor configurado e conectado com sucesso!' : '¡Servidor configurado y conectado con éxito!');
    
    // Close the drawer
    const drawer = document.getElementById('auth-supabase-drawer');
    if (drawer) drawer.classList.add('hidden');
}

function disconnectSupabase() {
    if (authSubscription) {
        try {
            if (typeof authSubscription.unsubscribe === 'function') {
                authSubscription.unsubscribe();
            }
        } catch (err) {
            console.warn("Error unsubscribing active auth session listener during disconnect:", err);
        }
        authSubscription = null;
    }
    
    localStorage.removeItem('agrimanage_sb_url');
    localStorage.removeItem('agrimanage_sb_key');
    useSupabase = false;
    supabaseClient = null;
    
    document.getElementById('cfg-supabase-url').value = '';
    document.getElementById('cfg-supabase-key').value = '';
    document.getElementById('btn-disconnect-sb').classList.add('hidden');
    
    showToast(currentLanguage === 'pt-BR' ? 'Desconectado do Supabase.' : 'Desconectado de Supabase.');
    handleLogout();
}

function loginDemoMode() {
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    updateCloudSyncUI('local');
    showToast(currentLanguage === 'pt-BR' ? 'Bem-vindo ao Aurelius!' : '¡Bienvenido a Aurelius!');
    
    // Show GPS permission modal once per device
    setTimeout(() => {
        const gpsAsked = localStorage.getItem('agrimanage_gps_asked');
        if (!gpsAsked) {
            showGPSPermissionModal();
        }
    }, 900);
}


async function loginWithOAuth(provider) {
    if (!useSupabase || !supabaseClient) {
        showToast(currentLanguage === 'pt-BR'
            ? 'Conecte o Supabase nas Configurações para usar Login Social!'
            : '¡Conecte Supabase en la Configuración para usar Ingreso Social!', true);
        return;
    }
    showToast(currentLanguage === 'pt-BR'
        ? `Redirecionando para login com ${provider}...`
        : `Redireccionando a ingreso con ${provider}...`);
    try {
        const { error } = await supabaseClient.auth.signInWithOAuth({
            provider,
            options: { redirectTo: window.location.origin }
        });
        if (error) {
            showToast(`Erro Supabase OAuth: ${error.message}`, true);
        }
    } catch (e) {
        console.error('OAuth error:', e);
        showToast('Falha na autenticação via OAuth!', true);
    }
}

async function handleLogout() {
    // Perform visual UI transition immediately to prevent freezing or hangs
    const appEl = document.getElementById('app-container');
    const authEl = document.getElementById('auth-screen');
    if (appEl) appEl.classList.add('hidden');
    if (authEl) authEl.classList.remove('hidden');
    updateCloudSyncUI('local');

    // Trigger Supabase signOut in the background without blocking the UI transition
    if (useSupabase && supabaseClient) {
        try {
            supabaseClient.auth.signOut().then(({ error }) => {
                if (error) {
                    console.error("Supabase signOut error:", error.message);
                } else {
                    console.log("Supabase signOut successful.");
                }
            }).catch(e => {
                console.error("Background signOut promise exception:", e);
            });
        } catch (e) {
            console.error("Background signOut call exception:", e);
        }
    }
}



// ==================== 7. RENDER MODULES & VIEWS ====================

function renderAllViews() {
    applyUserProfile();
    renderDashboard();
    renderPlotsView();
    renderRecursosView();
    renderInsumosView();
    renderFinancialView();
    renderInventarioView();
    renderSeedsGrains();
    renderSafrasView();
    populateSelectDropdowns();
}

// Module 1: Dashboard Bento Cards
function renderDashboard() {
    updateWelcomeMessage();
    
    // Calculate financial summaries based on exchange conversions to active BRL rate
    let totalRevBrl = 0;
    let totalExpBrl = 0;
    
    db.transactions.forEach(t => {
        const valBrl = convertValue(t.amount, t.currency, 'BRL');
        if (t.type === 'receita') {
            totalRevBrl += valBrl;
        } else {
            totalExpBrl += valBrl;
        }
    });

    const displayCurrency = 'BRL'; // Primary dashboard sums display
    
    document.getElementById('dash-total-revenue').textContent = formatCurrency(totalRevBrl, 'BRL');
    document.getElementById('dash-total-expense').textContent = formatCurrency(totalExpBrl, 'BRL');
    
    const net = totalRevBrl - totalExpBrl;
    const netEl = document.getElementById('dash-total-net');
    netEl.textContent = formatCurrency(net, 'BRL');
    if (net >= 0) {
        netEl.style.color = 'var(--color-primary)';
    } else {
        netEl.style.color = 'var(--color-error)';
    }
    
    // Total Hectares Mapped
    let totalHa = 0;
    db.plots.forEach(p => totalHa += p.size_hectares);
    document.getElementById('dash-total-area').textContent = `${totalHa.toFixed(1)} ha`;
}

// Module 2: Planting Plots (Talhões)
function renderPlotsView() {
    const listContainer = document.getElementById('plots-list-container');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    
    let totalHa = 0;
    let totalAlq = 0;
    
    db.plots.forEach(p => {
        totalHa += p.size_hectares;
        totalAlq += p.size_alqueires;
        
        const card = document.createElement('div');
        card.className = 'bg-surface-container-lowest border border-outline-variant rounded-xl p-5 hover:scale-[1.02] transition-all duration-300 relative';
        
        const statusLabel = p.status === 'Ativo' ? (currentLanguage === 'pt-BR' ? 'Ativo' : 'Ativo') : p.status;
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <span class="bg-primary/10 text-primary font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase">${p.crop_type}</span>
                <span class="inline-flex items-center text-[10px] text-on-surface-variant font-semibold">
                    <span class="status-dot status-active mr-1.5"></span> ${statusLabel}
                </span>
            </div>
            <h4 class="font-headline-md font-bold mb-2 text-on-surface">${p.name}</h4>
            <div class="grid grid-cols-2 gap-4 border-t border-outline-variant/60 pt-3 text-xs mt-4">
                <div>
                    <span class="text-on-surface-variant block uppercase text-[9px] font-bold">Hectares</span>
                    <span class="font-data-numeral text-sm font-bold text-on-surface">${p.size_hectares.toFixed(1)} ha</span>
                </div>
                <div>
                    <span class="text-on-surface-variant block uppercase text-[9px] font-bold">Alqueires</span>
                    <span class="font-data-numeral text-sm font-bold text-primary">${p.size_alqueires.toFixed(2)} alq</span>
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });

    document.getElementById('stat-total-hectares').textContent = `${totalHa.toFixed(1)} Hectares`;
    document.getElementById('stat-total-alqueires').textContent = `${totalAlq.toFixed(2)} Alqueires Paulista`;
}

// Helper to calculate central fuel tank level dynamically
function getCurrentFuelLevel() {
    if (!db.fuels || db.fuels.length === 0) return 0;
    let total = 0;
    db.fuels.forEach(f => {
        total += getFuelStock(f.id);
    });
    return total;
}

// Module 3: Fleet & Team Resources
function renderRecursosView() {
    // 1. Machinery Cards
    const machContainer = document.getElementById('machinery-list-container');
    if (machContainer) {
        machContainer.innerHTML = '';
        db.machinery.forEach(m => {
            const card = document.createElement('div');
            card.className = 'bg-surface-container-lowest border border-outline-variant rounded-xl p-5 hover:scale-[1.02] transition-all relative';
            
            let statusClass = 'status-active';
            let statusTxt = translations[currentLanguage].active_status;
            if (m.status === 'Ocioso') {
                statusClass = 'status-idle';
                statusTxt = translations[currentLanguage].idle_status;
            } else if (m.status === 'Manutenção') {
                statusClass = 'status-maintenance';
                statusTxt = translations[currentLanguage].service_status;
            }
            
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="bg-secondary-container text-on-secondary-container font-bold text-[9px] px-2 py-0.5 rounded uppercase">${m.type}</span>
                    <div class="flex items-center gap-2">
                        <span class="inline-flex items-center text-[10px] text-on-surface-variant font-semibold">
                            <span class="status-dot ${statusClass} mr-1.5"></span> ${statusTxt}
                        </span>
                        <button class="text-error hover:text-red-700 transition-colors p-0.5 rounded hover:bg-error-container" onclick="deleteMachineryItem('${m.id}')" title="${translations[currentLanguage].btn_delete_machine}">
                            <span class="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                    </div>
                </div>
                <h4 class="font-headline-md font-bold mb-3 text-on-surface">${m.name}</h4>
                <div class="mb-4">
                    <div class="flex justify-between text-[11px] text-on-surface-variant font-bold mb-1">
                        <span>${translations[currentLanguage].fuel_indicator}</span>
                        <span>${m.fuel_level_percent}%</span>
                    </div>
                    <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                        <div class="h-full bg-primary" style="width: ${m.fuel_level_percent}%"></div>
                    </div>
                </div>
                <div class="border-t border-outline-variant/60 pt-2 text-[10px] text-on-surface-variant">
                    <span>${translations[currentLanguage].last_action}: <strong>${m.last_action}</strong></span>
                </div>
            `;
            machContainer.appendChild(card);
        });
    }

    // 2. Staff Table
    const staffTbody = document.getElementById('staff-table-body');
    if (staffTbody) {
        staffTbody.innerHTML = '';
        db.staff.forEach(s => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-surface-container-low transition-colors';
            
            const wageString = formatCurrency(s.wage_rate, s.currency);
            
            tr.innerHTML = `
                <td class="p-4 font-bold text-on-surface">${s.name}</td>
                <td class="p-4">${s.role}</td>
                <td class="p-4"><span class="px-2 py-0.5 bg-surface-container-high rounded-full font-bold text-[10px]">${s.type}</span></td>
                <td class="p-4 text-right font-data-numeral text-sm">${wageString}</td>
                <td class="p-4 text-center">
                    <button class="text-error hover:text-red-700 transition-colors p-1" onclick="deleteStaffItem('${s.id}')">
                        <span class="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                </td>
            `;
            staffTbody.appendChild(tr);
        });
    }

    // 3. Fuel Logs Table & Gauge
    const fuelTbody = document.getElementById('fuel-table-body');
    if (fuelTbody) {
        fuelTbody.innerHTML = '';
        
        const sortedMovements = [...db.fuelMovements].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
        
        sortedMovements.forEach(m => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-surface-container-low transition-colors';
            
            const costFormatted = m.total_cost > 0 ? formatCurrency(m.total_cost, m.currency) : '-';
            
            const d = new Date(m.date + 'T00:00:00');
            const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short' });
            
            tr.innerHTML = `
                <td class="p-3 font-semibold text-on-surface-variant">${dateStr}</td>
                <td class="p-3 font-bold">${m.description}</td>
                <td class="p-3 font-data-numeral">${m.quantity} L</td>
                <td class="p-3 text-right font-data-numeral">${costFormatted}</td>
            `;
            fuelTbody.appendChild(tr);
        });

        // Update Circular Gauge details
        updateFuelGauge();
    }
}

// Module 3.5: Unified Stock Inventory Dashboard
function renderInventarioView() {
    // --- Summary KPIs ---
    const t = translations[currentLanguage];
    
    // Total pesticide volume across all products
    const totalPesticideLiters = db.pesticides.reduce((sum, p) => sum + (getPesticideStock(p.id) || 0), 0);
    const lowStockPesticides = db.pesticides.filter(p => getPesticideStock(p.id) < 100).length;
    
    const elTotalPest = document.getElementById('inv-kpi-total-pesticides');
    const elLowPest = document.getElementById('inv-kpi-low-pesticides');
    if (elTotalPest) elTotalPest.textContent = `${totalPesticideLiters.toLocaleString()} L`;
    if (elLowPest) elLowPest.textContent = lowStockPesticides > 0 ? `${lowStockPesticides} ${t.inv_low_stock_warning}` : t.inv_ok_stock;
    if (elLowPest) elLowPest.className = lowStockPesticides > 0 ? 'text-[10px] font-bold text-error' : 'text-[10px] font-bold text-primary';

    // Fuel tank level (dynamic)
    const fuelLevel = getCurrentFuelLevel();
    const fuelMax = db.fuels.reduce((sum, f) => sum + (f.capacity || 5000), 0) || 5000;
    const fuelPct = Math.round((fuelLevel / fuelMax) * 100);
    const elFuelLevel = document.getElementById('inv-kpi-fuel-level');
    const elFuelPct = document.getElementById('inv-kpi-fuel-pct');
    if (elFuelLevel) elFuelLevel.textContent = `${fuelLevel.toLocaleString()} L`;
    if (elFuelPct) elFuelPct.textContent = `${fuelPct}% da capacidade`;

    // Revenue from harvest transactions
    let totalHarvestBrl = 0;
    db.transactions.filter(tx => tx.category === 'Colheita' && tx.type === 'receita').forEach(tx => {
        totalHarvestBrl += convertValue(tx.amount, tx.currency, 'BRL');
    });
    const elHarvest = document.getElementById('inv-kpi-harvest-value');
    if (elHarvest) elHarvest.textContent = formatCurrency(totalHarvestBrl, 'BRL');

    // --- Pesticide Inventory Table ---
    const pestTbody = document.getElementById('inv-pesticides-tbody');
    if (pestTbody) {
        pestTbody.innerHTML = '';
        if (db.pesticides.length === 0) {
            pestTbody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            db.pesticides.forEach(p => {
                const currentStock = getPesticideStock(p.id);
                const isLow = currentStock < 100;
                const statusBadge = isLow
                    ? `<span class="bg-error-container text-on-error-container text-[9px] px-2 py-0.5 rounded font-bold uppercase animate-pulse">${t.inv_low_stock_warning}</span>`
                    : `<span class="bg-primary/10 text-primary text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.inv_ok_stock}</span>`;
                const qtyClass = isLow ? 'text-error font-bold' : 'text-primary font-bold';
                
                // Sum total acquired via finance transactions
                const totalBought = db.transactions
                    .filter(tx => tx.pesticide_id === p.id && tx.amount_purchased)
                    .reduce((sum, tx) => sum + convertValue(tx.amount, tx.currency, 'BRL'), 0);
                const costStr = totalBought > 0 ? formatCurrency(totalBought, 'BRL') : '-';

                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 font-bold text-on-surface">${p.name}</td>
                    <td class="p-4"><span class="bg-tertiary-container/30 text-on-tertiary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${p.type}</span></td>
                    <td class="p-4 font-data-numeral ${qtyClass}">${currentStock.toLocaleString()} L</td>
                    <td class="p-4">${statusBadge}</td>
                    <td class="p-4 font-data-numeral text-on-surface-variant">${costStr}</td>
                `;
                pestTbody.appendChild(tr);
            });
        }
    }

    // --- Fuel Movements Table ---
    const fuelTbody = document.getElementById('inv-fuel-tbody');
    if (fuelTbody) {
        fuelTbody.innerHTML = '';
        if (!db.fuelMovements || db.fuelMovements.length === 0) {
            fuelTbody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            const sorted = [...db.fuelMovements].sort((a, b) => b.date.localeCompare(a.date));
            sorted.forEach(f => {
                const d = new Date(f.date + 'T00:00:00');
                const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                const costStr = f.total_cost > 0 ? formatCurrency(f.total_cost, f.currency) : '-';
                
                const fuel = db.fuels.find(x => x.id === f.fuel_id);
                const fuelName = fuel ? fuel.name : 'Combustível';
                const descStr = f.machinery_id ? `${f.description} (${db.machinery.find(m => m.id === f.machinery_id)?.name || ''})` : f.description;
                
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
                    <td class="p-4 font-bold text-on-surface">${fuelName}: ${descStr}</td>
                    <td class="p-4 font-data-numeral text-primary font-bold">${f.quantity.toLocaleString()} L</td>
                    <td class="p-4 font-data-numeral text-right">${costStr}</td>
                `;
                fuelTbody.appendChild(tr);
            });
        }
    }

    // --- Purchases / Finance History Table ---
    const purchTbody = document.getElementById('inv-purchases-tbody');
    if (purchTbody) {
        purchTbody.innerHTML = '';
        // Show all expense transactions sorted by date descending
        const allExpenses = db.transactions.filter(tx => tx.type === 'gasto');
        if (allExpenses.length === 0) {
            purchTbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            allExpenses.forEach(tx => {
                const d = new Date(tx.date + 'T00:00:00');
                const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                const amtStr = formatCurrency(tx.amount, tx.currency);
                const brlStr = tx.currency !== 'BRL' ? `≈ ${formatCurrency(convertValue(tx.amount, tx.currency, 'BRL'), 'BRL')}` : '';
                const linked = tx.pesticide_id ? `<span class="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">${db.pesticides.find(p => p.id === tx.pesticide_id)?.name || ''} ${tx.amount_purchased || 0}L</span>` : '';

                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
                    <td class="p-4 font-bold text-on-surface">${tx.description} ${linked}</td>
                    <td class="p-4"><span class="bg-surface-container-high text-on-surface-variant text-[9px] px-2 py-0.5 rounded font-bold uppercase">${tx.category}</span></td>
                    <td class="p-4 font-data-numeral text-error font-bold text-right">-${amtStr}</td>
                    <td class="p-4 font-data-numeral text-xs opacity-60 text-right">${brlStr}</td>
                `;
                purchTbody.appendChild(tr);
            });
        }
    }
}

// Module 4: Pesticides chemical stocks & applications
function renderInsumosView() {
    const t = translations[currentLanguage];
    // 1. Stock Cards
    const pestContainer = document.getElementById('pesticide-stock-container');
    if (pestContainer) {
        pestContainer.innerHTML = '';
        db.pesticides.forEach(p => {
            const card = document.createElement('div');
            card.className = 'bg-surface-container-lowest border border-outline-variant rounded-xl p-5 hover:scale-[1.02] transition-all relative';
            
            // Highlight low stocks below 100 liters
            const currentStock = getPesticideStock(p.id);
            const isLow = currentStock < 100;
            const stockColorClass = isLow ? 'text-error font-bold' : 'text-primary font-bold';
            
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="bg-tertiary-container/30 text-on-tertiary-container font-bold text-[9px] px-2 py-0.5 rounded uppercase">${p.type}</span>
                    ${isLow ? '<span class="bg-error-container text-on-error-container font-extrabold text-[8px] px-2 py-0.5 rounded animate-pulse uppercase">Estoque Baixo</span>' : ''}
                </div>
                <h4 class="font-headline-md font-bold mb-3 text-on-surface">${p.name}</h4>
                <div class="flex justify-between items-end border-t border-outline-variant/60 pt-3 pb-2">
                    <span class="text-xs text-on-surface-variant font-bold uppercase">Volume Livre</span>
                    <span class="font-data-numeral text-md ${stockColorClass}">${currentStock} L</span>
                </div>
                
                <!-- Action buttons for Entry/Exit -->
                <div class="flex gap-2 mt-3 pt-2 border-t border-outline-variant/40">
                    <button class="btn btn-secondary btn-sm flex-grow text-[10px] py-1.5 flex items-center justify-center gap-1" onclick="openAddEntradaModal('${p.id}')">
                        <span class="material-symbols-outlined text-[14px]">login</span>
                        <span>Entrada</span>
                    </button>
                    <button class="btn btn-secondary btn-sm flex-grow text-[10px] py-1.5 flex items-center justify-center gap-1" onclick="openAddSaidaModal('${p.id}')">
                        <span class="material-symbols-outlined text-[14px]">logout</span>
                        <span>Aplicação</span>
                    </button>
                </div>

                <!-- Collapsible Movements History -->
                <div class="mt-4 border-t border-outline-variant/40 pt-3">
                    <details class="group">
                        <summary class="list-none flex items-center justify-between text-xs text-on-surface-variant font-bold cursor-pointer hover:text-primary transition-colors">
                            <span>Histórico de Movimentações</span>
                            <span class="material-symbols-outlined text-[16px] group-open:rotate-180 transition-transform">expand_more</span>
                        </summary>
                        <div class="mt-2 flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                            ${renderMovementsList(p.id)}
                        </div>
                    </details>
                </div>
            `;
            pestContainer.appendChild(card);
        });
    }

    // 2. Application Logs
    const appsTbody = document.getElementById('applications-table-body');
    if (appsTbody) {
        appsTbody.innerHTML = '';
        db.applications.forEach(a => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-surface-container-low transition-colors';
            
            const plotName = db.plots.find(p => p.id === a.plot_id)?.name || a.plot_id;
            const pestName = db.pesticides.find(p => p.id === a.pesticide_id)?.name || a.pesticide_id;
            
            const d = new Date(a.date + 'T00:00:00');
            const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
            
            tr.innerHTML = `
                <td class="p-4 text-on-surface-variant font-bold">${dateStr}</td>
                <td class="p-4 font-bold text-primary">${plotName}</td>
                <td class="p-4 font-semibold">${pestName}</td>
                <td class="p-4 font-data-numeral">${a.amount_applied} Litros</td>
                <td class="p-4 text-xs italic opacity-80">${a.weather_condition}</td>
                <td class="p-4 text-center">
                    <button class="text-error hover:text-red-700 transition-colors p-1" onclick="deleteApplication('${a.id}')">
                        <span class="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                </td>
            `;
            appsTbody.appendChild(tr);
        });
    }
}

// Module 5: Financial Transactions & exchange solver ledger
function renderFinancialView() {
    renderFinancialLedger();
    renderFinanceCharts();
}

function renderFinancialLedger() {
    const ledgerTbody = document.getElementById('ledger-table-body');
    if (!ledgerTbody) return;
    
    ledgerTbody.innerHTML = '';
    
    // Read the active filter currency to display unified sums
    const selectedDisplayCurrency = document.getElementById('currency-display-filter').value;
    
    db.transactions.forEach(tx => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-surface-container-low transition-colors';
        
        const isExp = tx.type === 'gasto';
        const typeBadge = isExp 
            ? `<span class="bg-error-container text-on-error-container px-2 py-0.5 rounded font-extrabold text-[9px] uppercase">${translations[currentLanguage].stats_expense}</span>` 
            : `<span class="bg-primary-container/30 text-on-primary-container px-2 py-0.5 rounded font-extrabold text-[9px] uppercase">${translations[currentLanguage].stats_revenue}</span>`;
            
        // Calculate the converted exchange equivalence
        const originalValueStr = formatCurrency(tx.amount, tx.currency);
        
        let convertedValueStr = '-';
        if (tx.currency !== selectedDisplayCurrency) {
            const convVal = convertValue(tx.amount, tx.currency, selectedDisplayCurrency);
            convertedValueStr = `➡️ ${formatCurrency(convVal, selectedDisplayCurrency)}`;
        }
        
        const textWeightClass = isExp ? 'text-error font-bold' : 'text-primary font-bold';
        
        const d = new Date(tx.date + 'T00:00:00');
        const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
        
        // Status Badge for A Prazo / Pendente
        const statusBadge = tx.payment_status === 'pendente'
            ? `<span class="bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300/30 text-[9px] px-2 py-0.5 rounded font-bold ml-2 select-none">${currentLanguage === 'pt-BR' ? 'A Prazo (Pendente)' : 'A Plazo (Pendiente)'}</span>`
            : '';
            
        // Quitar button action
        const payAction = tx.payment_status === 'pendente'
            ? `<button class="text-secondary hover:text-green-700 transition-colors p-1" onclick="payPendingTransaction('${tx.id}')" title="${currentLanguage === 'pt-BR' ? 'Marcar como Pago' : 'Marcar como Pagado'}">
                   <span class="material-symbols-outlined text-[18px]">price_check</span>
               </button>`
            : '';
            
        tr.innerHTML = `
            <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
            <td class="p-4 font-bold text-on-surface flex items-center gap-2 flex-wrap">
                ${typeBadge} 
                <span>${tx.description}</span>
                ${statusBadge}
            </td>
            <td class="p-4 text-on-surface-variant">${tx.category}</td>
            <td class="p-4 text-right font-data-numeral text-sm ${textWeightClass}">${isExp ? '-' : '+'}${originalValueStr}</td>
            <td class="p-4 text-right font-data-numeral text-xs opacity-70">${convertedValueStr}</td>
            <td class="p-4 text-center">
                <div class="flex items-center justify-center gap-1.5">
                    ${payAction}
                    <button class="text-error hover:text-red-700 transition-colors p-1" onclick="deleteTransaction('${tx.id}')">
                        <span class="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                </div>
            </td>
        `;
        ledgerTbody.appendChild(tr);
    });
}

// ----------------------------------------------------
// 2. SVG CHART RENDERING & CATEGORY Bento Grid
// ----------------------------------------------------

function renderFinanceCharts() {
    const chartContainer = document.getElementById('finance-chart-container');
    const categoryContainer = document.getElementById('category-distribution-container');
    if (!chartContainer || !categoryContainer) return;
    
    // Stop pulse animations if they were running
    chartContainer.classList.remove('animate-pulse-slow');
    
    // 1. Group transaction sums by Month ('2026-01' to '2026-05')
    const monthlyData = {
        '2026-01': { revenue: 0, expense: 0 },
        '2026-02': { revenue: 0, expense: 0 },
        '2026-03': { revenue: 0, expense: 0 },
        '2026-04': { revenue: 0, expense: 0 },
        '2026-05': { revenue: 0, expense: 0 }
    };
    
    // Aggregate all transactions
    db.transactions.forEach(t => {
        const ym = t.date.substring(0, 7);
        if (ym) {
            if (!monthlyData[ym]) {
                monthlyData[ym] = { revenue: 0, expense: 0 };
            }
            const val = convertValue(t.amount, t.currency, 'BRL');
            if (t.type === 'receita') {
                monthlyData[ym].revenue += val;
            } else {
                monthlyData[ym].expense += val;
            }
        }
    });

    const sortedMonths = Object.keys(monthlyData).sort();
    
    // Calculate Y-axis scaling
    let maxVal = 5000;
    sortedMonths.forEach(m => {
        maxVal = Math.max(maxVal, monthlyData[m].revenue, monthlyData[m].expense);
    });
    maxVal = Math.ceil(maxVal * 1.15); // Add top padding
    
    // SVG Dimensions
    const width = 600;
    const height = 220;
    const paddingLeft = 50;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;
    
    const graphWidth = width - paddingLeft - paddingRight;
    const graphHeight = height - paddingTop - paddingBottom;
    
    let svgContent = `<svg viewBox="0 0 ${width} ${height}" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">`;
    
    // Add gridlines (4 lines)
    const gridLines = 4;
    for (let i = 0; i <= gridLines; i++) {
        const ratio = i / gridLines;
        const yVal = ratio * maxVal;
        const yPos = height - paddingBottom - (ratio * graphHeight);
        
        // Gridline (dashed)
        if (i > 0) {
            svgContent += `<line x1="${paddingLeft}" y1="${yPos}" x2="${width - paddingRight}" y2="${yPos}" stroke="var(--color-outline-variant)" stroke-width="1" stroke-dasharray="4,4" opacity="0.4" />`;
        }
        
        // Y-axis Label
        svgContent += `<text x="${paddingLeft - 8}" y="${yPos + 4}" fill="var(--color-on-surface-variant)" font-size="9" text-anchor="end" font-family="sans-serif" font-weight="bold" opacity="0.8">${formatShortCurrency(yVal)}</text>`;
    }
    
    // X-axis line
    svgContent += `<line x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}" stroke="var(--color-outline-variant)" stroke-width="1" opacity="0.8" />`;
    
    // Plot Bars
    const groupCount = sortedMonths.length;
    const groupWidth = graphWidth / groupCount;
    const barWidth = Math.max(10, Math.min(22, groupWidth * 0.3));
    const spacing = 3;
    
    sortedMonths.forEach((m, idx) => {
        const data = monthlyData[m];
        
        // Converted heights
        const revHeight = (data.revenue / maxVal) * graphHeight;
        const expHeight = (data.expense / maxVal) * graphHeight;
        
        const revY = height - paddingBottom - revHeight;
        const expY = height - paddingBottom - expHeight;
        
        const groupCenterX = paddingLeft + (idx * groupWidth) + (groupWidth / 2);
        const revX = groupCenterX - barWidth - (spacing / 2);
        const expX = groupCenterX + (spacing / 2);
        
        // Date formatting for the label
        const d = new Date(m + '-15T00:00:00');
        const monthLabel = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { month: 'short' });
        const capitalizedLabel = monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1);
        
        // Month label under group
        svgContent += `<text x="${groupCenterX}" y="${height - paddingBottom + 18}" fill="var(--color-on-surface-variant)" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">${capitalizedLabel}</text>`;
        
        // Hover title translation
        const revTitle = currentLanguage === 'pt-BR' ? 'Receita' : 'Ingreso';
        const expTitle = currentLanguage === 'pt-BR' ? 'Gasto' : 'Egreso';
        
        // Draw Revenue Bar
        svgContent += `
        <rect x="${revX}" y="${height - paddingBottom}" width="${barWidth}" height="0" fill="var(--color-primary)" rx="4" class="cursor-pointer transition-all duration-200 hover:brightness-125"
            onmouseenter="showChartTooltip(event, '${capitalizedLabel} - ${revTitle}', ${data.revenue})"
            onmousemove="showChartTooltip(event, '${capitalizedLabel} - ${revTitle}', ${data.revenue})"
            onmouseleave="hideChartTooltip()">
            <animate attributeName="y" from="${height - paddingBottom}" to="${revY}" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
            <animate attributeName="height" from="0" to="${revHeight}" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
        </rect>
        `;
        
        // Draw Expense Bar
        svgContent += `
        <rect x="${expX}" y="${height - paddingBottom}" width="${barWidth}" height="0" fill="var(--color-error)" rx="4" class="cursor-pointer transition-all duration-200 hover:brightness-125"
            onmouseenter="showChartTooltip(event, '${capitalizedLabel} - ${expTitle}', ${data.expense})"
            onmousemove="showChartTooltip(event, '${capitalizedLabel} - ${expTitle}', ${data.expense})"
            onmouseleave="hideChartTooltip()">
            <animate attributeName="y" from="${height - paddingBottom}" to="${expY}" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
            <animate attributeName="height" from="0" to="${expHeight}" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
        </rect>
        `;
    });
    
    svgContent += `</svg>`;
    
    // Inject SVG and setup chart wrapper styling
    chartContainer.innerHTML = svgContent;
    
    // Append or recreate Tooltip div inside the container
    let tooltip = document.getElementById('chart-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'chart-tooltip';
        tooltip.className = 'absolute hidden bg-surface-container-high border border-outline-variant text-on-surface text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl pointer-events-none z-30 transition-opacity duration-200 backdrop-blur-md';
        chartContainer.appendChild(tooltip);
    }
    
    // ----------------------------------------------------
    // 2. Render Expense Category Distribution Bento Grid
    // ----------------------------------------------------
    // Sum costs in BRL
    const catTotals = {
        'Combustível': 0,
        'Insumos': 0,
        'Funcionários': 0,
        'Outros': 0
    };
    
    let totalExpenseSumBrl = 0;
    
    db.transactions.forEach(t => {
        if (t.type === 'gasto') {
            const val = convertValue(t.amount, t.currency, 'BRL');
            let catKey = t.category;
            // Map category to a standard key if needed (making sure we handle spelling)
            if (catKey === 'Combustível' || catKey === 'Combustvel') catKey = 'Combustível';
            if (catKey === 'Funcionários' || catKey === 'Funcionrios') catKey = 'Funcionários';
            
            if (catTotals[catKey] !== undefined) {
                catTotals[catKey] += val;
            } else {
                catTotals['Outros'] += val;
            }
            totalExpenseSumBrl += val;
        }
    });
    
    // Sort categories by expenditure
    const sortedCategories = Object.keys(catTotals).map(cat => {
        return {
            name: cat,
            amount: catTotals[cat],
            percent: totalExpenseSumBrl > 0 ? (catTotals[cat] / totalExpenseSumBrl) * 100 : 0
        };
    }).sort((a, b) => b.amount - a.amount);
    
    // Clear and build progress bars
    categoryContainer.innerHTML = '';
    
    if (totalExpenseSumBrl === 0) {
        categoryContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full py-8 text-on-surface-variant opacity-60 text-center">
            <span class="material-symbols-outlined text-4xl mb-2">account_balance_wallet</span>
            <p class="text-xs font-semibold">${currentLanguage === 'pt-BR' ? 'Sem despesas registradas' : 'Sin egresos registrados'}</p>
        </div>`;
        return;
    }
    
    // Design matching colors/gradients for categories
    const categoryStyles = {
        'Combustível': {
            icon: 'local_gas_station',
            colorClass: 'bg-amber-500',
            bgClass: 'bg-amber-500/20',
            textColor: 'text-amber-600 dark:text-amber-400',
            i18nKey: 'cat_fuel'
        },
        'Insumos': {
            icon: 'science',
            colorClass: 'bg-primary',
            bgClass: 'bg-primary/20',
            textColor: 'text-primary dark:text-primary-container',
            i18nKey: 'cat_pesticides'
        },
        'Funcionários': {
            icon: 'badge',
            colorClass: 'bg-tertiary',
            bgClass: 'bg-tertiary/20',
            textColor: 'text-tertiary dark:text-tertiary-fixed',
            i18nKey: 'cat_staff'
        },
        'Outros': {
            icon: 'payments',
            colorClass: 'bg-secondary',
            bgClass: 'bg-secondary/20',
            textColor: 'text-secondary dark:text-on-secondary-container',
            i18nKey: 'cat_other'
        }
    };
    
    sortedCategories.forEach(cat => {
        const style = categoryStyles[cat.name] || categoryStyles['Outros'];
        const translatedName = translations[currentLanguage][style.i18nKey] || cat.name;
        
        const catRow = document.createElement('div');
        catRow.className = 'flex flex-col gap-1.5';
        
        catRow.innerHTML = `
            <div class="flex justify-between items-center text-xs">
                <span class="flex items-center gap-1.5 font-bold text-on-surface">
                    <span class="material-symbols-outlined text-[16px] ${style.textColor}">${style.icon}</span>
                    <span>${translatedName}</span>
                </span>
                <span class="font-data-numeral font-bold text-on-surface-variant">
                    ${formatCurrency(cat.amount, 'BRL')} <span class="text-[10px] opacity-70 font-semibold">(${cat.percent.toFixed(0)}%)</span>
                </span>
            </div>
            <div class="w-full h-2.5 rounded-full ${style.bgClass} overflow-hidden">
                <div class="h-full rounded-full ${style.colorClass} transition-all duration-1000 ease-out" style="width: 0%" id="bar-${cat.name}"></div>
            </div>
        `;
        categoryContainer.appendChild(catRow);
        
        // Trigger smooth progress animation using setTimeout
        setTimeout(() => {
            const bar = document.getElementById(`bar-${cat.name}`);
            if (bar) {
                bar.style.width = `${cat.percent}%`;
            }
        }, 100);
    });
}

// Support functions:
function formatShortCurrency(val) {
    if (val >= 1000000) {
        return (val / 1000000).toFixed(1).replace('.0', '') + 'M';
    }
    if (val >= 1000) {
        return (val / 1000).toFixed(1).replace('.0', '') + 'k';
    }
    return val.toFixed(0);
}

// Set up globals so SVG attributes can call these functions on hover
window.showChartTooltip = function(event, title, value) {
    const tooltip = document.getElementById('chart-tooltip');
    const chartContainer = document.getElementById('finance-chart-container');
    if (!tooltip || !chartContainer) return;
    
    tooltip.innerHTML = `
        <div class="text-[9px] uppercase tracking-wider text-on-surface-variant font-extrabold mb-0.5">${title}</div>
        <div class="text-xs font-data-numeral font-black text-primary">${formatCurrency(value, 'BRL')}</div>
    `;
    
    tooltip.classList.remove('hidden');
    
    // Position relative to chart-container bounds
    const rect = chartContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top - 48; // display 48px above cursor
    
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.opacity = '1';
};

window.hideChartTooltip = function() {
    const tooltip = document.getElementById('chart-tooltip');
    if (tooltip) {
        tooltip.classList.add('hidden');
        tooltip.style.opacity = '0';
    }
};

// Populate select dropdown handles dynamically
function populateSelectDropdowns() {
    const applyPlotSelect = document.getElementById('apply-plot');
    const applyPesticideSelect = document.getElementById('apply-pesticide');
    const entryPesticideSelect = document.getElementById('entry-pesticide');
    const fuelMachSelect = document.getElementById('fuel-machinery');
    const finPlotSelect = document.getElementById('fin-plot');
    
    if (applyPlotSelect) {
        applyPlotSelect.innerHTML = '';
        db.plots.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = p.name;
            applyPlotSelect.appendChild(opt);
        });
    }

    if (applyPesticideSelect) {
        applyPesticideSelect.innerHTML = '';
        db.pesticides.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `${p.name} (${getPesticideStock(p.id)} L)`;
            applyPesticideSelect.appendChild(opt);
        });
    }

    if (entryPesticideSelect) {
        entryPesticideSelect.innerHTML = '';
        db.pesticides.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = p.name;
            entryPesticideSelect.appendChild(opt);
        });
    }

    if (fuelMachSelect) {
        fuelMachSelect.innerHTML = `<option value="">${translations[currentLanguage].fuel_tank_store}</option>`;
        db.machinery.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.id;
            opt.textContent = m.name;
            fuelMachSelect.appendChild(opt);
        });
    }

    if (finPlotSelect) {
        finPlotSelect.innerHTML = `<option value="">${translations[currentLanguage].plot_none}</option>`;
        db.plots.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = p.name;
            finPlotSelect.appendChild(opt);
        });
    }

    const finPesticideSelect = document.getElementById('fin-pesticide-select');
    if (finPesticideSelect) {
        finPesticideSelect.innerHTML = '';
        db.pesticides.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `${p.name} (${getPesticideStock(p.id)} L)`;
            finPesticideSelect.appendChild(opt);
        });
    }

    const seedGrainSafraSelect = document.getElementById('seed-grain-safra');
    if (seedGrainSafraSelect) {
        seedGrainSafraSelect.innerHTML = '';
        db.safras.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.id;
            opt.textContent = s.name;
            seedGrainSafraSelect.appendChild(opt);
        });
    }

    const seedGrainProductSelect = document.getElementById('seed-grain-product');
    if (seedGrainProductSelect) {
        seedGrainProductSelect.innerHTML = '';
        db.seedsGrainsProducts.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `${p.name} (${p.category})`;
            seedGrainProductSelect.appendChild(opt);
        });
        onSeedGrainProductChange();
    }

    const seedGrainPlotSelect = document.getElementById('seed-grain-plot');
    if (seedGrainPlotSelect) {
        seedGrainPlotSelect.innerHTML = `<option value="">${currentLanguage === 'pt-BR' ? '-- Selecionar Talhão --' : '-- Seleccionar Lote --'}</option>`;
        db.plots.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = p.name;
            seedGrainPlotSelect.appendChild(opt);
        });
    }

    const fuelProductSelect = document.getElementById('fuel-product');
    if (fuelProductSelect) {
        fuelProductSelect.innerHTML = '';
        db.fuels.forEach(f => {
            const opt = document.createElement('option');
            opt.value = f.id;
            opt.textContent = f.name;
            fuelProductSelect.appendChild(opt);
        });
    }

    const fuelGaugeProductSelect = document.getElementById('fuel-gauge-product-select');
    if (fuelGaugeProductSelect) {
        const prevVal = fuelGaugeProductSelect.value;
        fuelGaugeProductSelect.innerHTML = '';
        db.fuels.forEach(f => {
            const opt = document.createElement('option');
            opt.value = f.id;
            opt.textContent = f.name;
            fuelGaugeProductSelect.appendChild(opt);
        });
        if (prevVal && db.fuels.some(f => f.id === prevVal)) {
            fuelGaugeProductSelect.value = prevVal;
        } else if (db.fuels.length > 0) {
            fuelGaugeProductSelect.value = db.fuels[0].id;
        }
    }
}

// ==================== 8. SUBMISSIONS & REGISTRY INSERTIONS ====================

// Add Plot
function handleFormSubmitPlot(e) {
    e.preventDefault();
    const name = document.getElementById('plot-name').value;
    const ha = parseFloat(document.getElementById('plot-hectares').value);
    const alq = parseFloat(document.getElementById('plot-alqueires').value);
    const crop = document.getElementById('plot-crop').value;
    
    if (name && ha > 0 && alq > 0) {
        const id = 'plot-' + (db.plots.length + 1);
        db.plots.push({ id, name, size_hectares: ha, size_alqueires: alq, crop_type: crop, status: 'Ativo' });
        saveDatabaseLocally();
        closeModal('modal-add-talhao');
        renderPlotsView();
        populateSelectDropdowns();
        showToast(currentLanguage === 'pt-BR' ? 'Talhão adicionado com sucesso!' : '¡Lote agregado con éxito!');
    }
}

function calculatePlotUnits(type) {
    const haInput = document.getElementById('plot-hectares');
    const alqInput = document.getElementById('plot-alqueires');
    const factor = 2.42; // Paulista standard
    
    if (type === 'ha') {
        const val = parseFloat(haInput.value);
        if (!isNaN(val)) {
            alqInput.value = (val / factor).toFixed(2);
        }
    } else {
        const val = parseFloat(alqInput.value);
        if (!isNaN(val)) {
            haInput.value = (val * factor).toFixed(1);
        }
    }
}

// Add Machinery
function handleFormSubmitMachinery(e) {
    e.preventDefault();
    const name = document.getElementById('mach-name').value;
    const type = document.getElementById('mach-type').value;
    const fuel = parseInt(document.getElementById('mach-fuel').value);
    
    if (name && fuel >= 0) {
        const id = 'mach-' + (db.machinery.length + 1);
        db.machinery.push({ id, name, type, fuel_level_percent: fuel, status: 'Ativo', last_action: 'Garagem' });
        saveDatabaseLocally();
        closeModal('modal-add-maquinaria');
        renderRecursosView();
        populateSelectDropdowns();
        showToast(currentLanguage === 'pt-BR' ? 'Maquinário registrado!' : '¡Maquinaria registrada!');
    }
}

// Add Staff
function handleFormSubmitStaff(e) {
    e.preventDefault();
    const name = document.getElementById('staff-name').value;
    const role = document.getElementById('staff-role').value;
    const type = document.getElementById('staff-type').value;
    const wage = parseFloat(document.getElementById('staff-wage').value);
    const currency = document.getElementById('staff-currency').value;
    
    if (name && role && wage > 0) {
        const id = 'staff-' + (db.staff.length + 1);
        db.staff.push({ id, name, role, type, wage_rate: wage, currency });
        saveDatabaseLocally();
        closeModal('modal-add-funcionario');
        renderRecursosView();
        showToast(currentLanguage === 'pt-BR' ? 'Funcionário cadastrado!' : '¡Personal registrado!');
    }
}

function deleteStaffItem(id) {
    db.staff = db.staff.filter(s => s.id !== id);
    saveDatabaseLocally();
    renderRecursosView();
}

function deleteMachineryItem(id) {
    const mach = db.machinery.find(m => m.id === id);
    if (!mach) return;
    const confirmMsg = currentLanguage === 'pt-BR'
        ? `Remover "${mach.name}" da frota permanentemente?`
        : `¿Retirar "${mach.name}" de la flota permanentemente?`;
    if (!confirm(confirmMsg)) return;
    db.machinery = db.machinery.filter(m => m.id !== id);
    saveDatabaseLocally();
    renderRecursosView();
    populateSelectDropdowns();
    showToast(currentLanguage === 'pt-BR' ? `${mach.name} removido da frota!` : `¡${mach.name} retirado de la flota!`);
}

// Add Fuel
function handleFormSubmitFuel(e) {
    e.preventDefault();
    const fuelId = document.getElementById('fuel-product').value;
    const desc = document.getElementById('fuel-desc').value;
    const date = document.getElementById('fuel-date').value || new Date().toISOString().split('T')[0];
    const liters = parseInt(document.getElementById('fuel-liters').value) || 0;
    const machId = document.getElementById('fuel-machinery').value;
    
    const fuel = db.fuels.find(f => f.id === fuelId);
    if (!fuel || liters <= 0) return;
    
    const isOutflow = !!machId;
    if (isOutflow) {
        const stock = getFuelStock(fuelId);
        if (liters > stock) {
            showToast(currentLanguage === 'pt-BR' 
                ? `Estoque insuficiente! Estoque atual: ${stock.toLocaleString()} L` 
                : `¡Stock insuficiente! Stock actual: ${stock.toLocaleString()} L`);
            return;
        }
    }
    
    let cost = 0;
    let currency = 'BRL';
    let paymentType = 'À vista';
    let dueDate = '';
    let autoTx = false;
    
    if (!isOutflow) {
        cost = parseFloat(document.getElementById('fuel-cost').value) || 0;
        currency = document.getElementById('fuel-currency').value;
        paymentType = document.getElementById('fuel-payment-type').value;
        dueDate = paymentType === 'A prazo' ? document.getElementById('fuel-due-date').value : '';
        autoTx = document.getElementById('fuel-auto-tx').checked;
    }
    
    const id = 'fuel-mov-' + Date.now();
    
    db.fuelMovements.push({
        id,
        fuel_id: fuelId,
        type: isOutflow ? 'saida' : 'entrada',
        date,
        quantity: liters,
        unit_price: cost > 0 ? (cost / liters) : 0,
        total_cost: cost,
        currency,
        payment_type: paymentType,
        payment_date: paymentType === 'A prazo' ? dueDate : date,
        machinery_id: machId,
        description: desc
    });

    // Also populate legacy log table for report/backward compatibility
    db.fuelLogs.unshift({
        id,
        date,
        desc: isOutflow ? `${fuel.name}: Abastecimento ${db.machinery.find(m => m.id === machId)?.name || ''}` : `${fuel.name}: ${desc}`,
        amount_liters: liters,
        cost_value: cost,
        currency,
        mach_id: machId
    });
    
    // Update machinery level if refueling
    if (isOutflow) {
        const mach = db.machinery.find(m => m.id === machId);
        if (mach) {
            mach.fuel_level_percent = Math.min(100, mach.fuel_level_percent + Math.round((liters / 120) * 100)); // Simulating 120L tank
            mach.last_action = currentLanguage === 'pt-BR' ? 'Abastecido' : 'Abastecido';
        }
    }
    
    // Financial transaction
    if (autoTx && cost > 0) {
        const txId = 'tx-' + Date.now();
        db.transactions.unshift({
            id: txId,
            date,
            type: 'gasto',
            description: `${currentLanguage === 'pt-BR' ? 'Combustível' : 'Combustible'}: ${desc}`,
            amount: cost,
            currency,
            category: 'Combustível',
            plot_id: '',
            movement_id: id,
            payment_status: paymentType === 'A prazo' ? 'pendente' : 'pago',
            due_date: paymentType === 'A prazo' ? dueDate : ''
        });
    }
    
    saveDatabaseLocally();
    closeModal('modal-add-combustivel');
    renderRecursosView();
    renderInventarioView();
    renderFinancialView();
    renderDashboard();
    showToast(currentLanguage === 'pt-BR' ? 'Movimentação de combustível registrada!' : '¡Movimiento de combustible registrado!');
    e.target.reset();
}

// Add Pesticide stock
function handleFormSubmitPesticideStock(e) {
    e.preventDefault();
    const name = document.getElementById('pesticide-name').value;
    const type = document.getElementById('pesticide-type').value;
    const stock = parseInt(document.getElementById('pesticide-stock').value);
    const cost = parseFloat(document.getElementById('pesticide-cost').value) || 0;
    const costCurrency = document.getElementById('pesticide-cost-currency').value || 'BRL';
    const paymentType = document.getElementById('pesticide-payment-type').value;
    const paymentDate = document.getElementById('pesticide-payment-date').value;
    
    if (name && stock >= 0) {
        const id = 'pest-' + Date.now();
        db.pesticides.push({ id, name, type, stock_liters: stock });
        
        const date = new Date().toISOString().split('T')[0];
        const movId = 'mov-init-' + id + '-' + Date.now();
        
        if (stock > 0) {
            db.pesticideMovements.push({
                id: movId,
                pesticide_id: id,
                type: 'entrada',
                date,
                quantity: stock,
                unit_price: cost > 0 ? (cost / stock) : 0,
                total_cost: cost,
                currency: costCurrency,
                payment_type: paymentType,
                payment_date: paymentType === 'A prazo' ? paymentDate : date,
                description: currentLanguage === 'pt-BR' ? 'Estoque Inicial' : 'Stock Inicial'
            });
        }
        
        // If a cost was entered, automatically register financial expense
        if (cost > 0) {
            const txId = 'tx-' + Date.now();
            db.transactions.unshift({
                id: txId,
                date,
                type: 'gasto',
                description: `${currentLanguage === 'pt-BR' ? 'Compra de Insumo' : 'Compra de Insumo'}: ${name}`,
                amount: cost,
                currency: costCurrency,
                category: 'Insumos',
                plot_id: '',
                pesticide_id: id,
                amount_purchased: stock,
                movement_id: movId,
                payment_type: paymentType,
                payment_status: paymentType === 'A prazo' ? 'pendente' : 'pago',
                due_date: paymentType === 'A prazo' ? paymentDate : ''
            });
        }

        saveDatabaseLocally();
        closeModal('modal-add-cadastro-insumo');
        renderInsumosView();
        renderInventarioView();
        if (cost > 0) { renderFinancialView(); renderDashboard(); }
        populateSelectDropdowns();
        showToast(currentLanguage === 'pt-BR' ? `${name} cadastrado no estoque!` : `¡${name} registrado en stock!`);
    }
}

// Apply pesticide in land
function handleFormSubmitPesticideApply(e) {
    e.preventDefault();
    const plotId = document.getElementById('apply-plot').value;
    const pesticideId = document.getElementById('apply-pesticide').value;
    const amount = parseFloat(document.getElementById('apply-amount').value);
    
    registerPesticideApplicationDirect(plotId, pesticideId, amount);
    closeModal('modal-add-insumo-aplicacao');
}

function registerPesticideApplicationDirect(plotId, pesticideId, amount) {
    if (plotId && pesticideId && amount > 0) {
        const id = 'apply-' + (db.applications.length + 1);
        const date = new Date().toISOString().split('T')[0];
        
        // Reduce stock in inventory
        const pest = db.pesticides.find(p => p.id === pesticideId);
        if (pest) {
            const currentStock = getPesticideStock(pesticideId);
            if (currentStock < amount) {
                showToast(currentLanguage === 'pt-BR' ? 'Estoque insuficiente no depósito!' : '¡Stock insuficiente en el depósito!', true);
                return;
            }
            pest.stock_liters = Math.max(0, currentStock - amount);
        }
        
        const weatherCond = `${currentLanguage === 'pt-BR' ? 'Ensolarado' : 'Soleado'}, ${simulatedTemp}°C, ${currentLanguage === 'pt-BR' ? 'Vento' : 'Viento'} ${simulatedWindSpeed} km/h`;
        
        db.applications.unshift({ id, date, plot_id: plotId, pesticide_id: pesticideId, amount_applied: amount, weather_condition: weatherCond });
        
        // Add dynamic exit movement!
        const plot = db.plots.find(p => p.id === plotId);
        const plotName = plot ? plot.name : plotId;
        db.pesticideMovements.push({
            id: 'mov-app-' + id,
            pesticide_id: pesticideId,
            type: 'saida',
            date: date,
            quantity: amount,
            unit_price: 0,
            total_cost: 0,
            currency: 'BRL',
            payment_date: '',
            description: (currentLanguage === 'pt-BR' ? 'Aplicação no ' : 'Aplicación en ') + plotName,
            application_id: id
        });
        
        saveDatabaseLocally();
        renderInsumosView();
        populateSelectDropdowns();
        showToast(currentLanguage === 'pt-BR' ? 'Aplicação registrada com sucesso!' : '¡Aplicación registrada con éxito!');
    }
}

function deleteApplication(id) {
    const app = db.applications.find(a => a.id === id);
    if (app) {
        // Return pesticide back to stock
        const pest = db.pesticides.find(p => p.id === app.pesticide_id);
        if (pest) {
            pest.stock_liters += app.amount_applied;
        }
        db.applications = db.applications.filter(a => a.id !== id);
        saveDatabaseLocally();
        renderInsumosView();
        populateSelectDropdowns();
    }
}

// Add Finance movement
function setFinanceType(type) {
    activeFinanceType = type;
    document.getElementById('fin-type').value = type;
    
    const btnExp = document.getElementById('btn-fin-type-expense');
    const btnRev = document.getElementById('btn-fin-type-revenue');
    
    if (type === 'gasto') {
        btnExp.classList.add('active');
        btnRev.classList.remove('active');
    } else {
        btnRev.classList.add('active');
        btnExp.classList.remove('active');
    }
    toggleFinanceInsumoFields();
}

function handleFormSubmitFinance(e) {
    e.preventDefault();
    const type = document.getElementById('fin-type').value;
    const desc = document.getElementById('fin-desc').value;
    const cat = document.getElementById('fin-category').value;
    const plotId = document.getElementById('fin-plot').value;
    const amount = parseFloat(document.getElementById('fin-amount').value);
    const currency = document.getElementById('fin-currency').value;
    
    if (desc && amount > 0) {
        const id = 'tx-' + (db.transactions.length + 1);
        const date = new Date().toISOString().split('T')[0];
        
        let txObj = { id, date, type, description: desc, amount, currency, category: cat, plot_id: plotId };
        
        // Handle chemical stock inventory addition
        let stockUpdated = false;
        let qty = 0;
        let pestName = '';
        if (type === 'gasto' && cat === 'Insumos') {
            const pestId = document.getElementById('fin-pesticide-select').value;
            qty = parseFloat(document.getElementById('fin-pesticide-qty').value) || 0;
            
            if (pestId && qty > 0) {
                const pest = db.pesticides.find(p => p.id === pestId);
                if (pest) {
                    pest.stock_liters = (pest.stock_liters || 0) + qty;
                    txObj.pesticide_id = pestId;
                    txObj.amount_purchased = qty;
                    pestName = pest.name;
                    stockUpdated = true;
                }
            }
        }
        
        db.transactions.unshift(txObj);
        
        saveDatabaseLocally();
        closeModal('modal-add-financa');
        renderFinancialView();
        renderDashboard();
        
        if (stockUpdated) {
            renderInsumosView();
            populateSelectDropdowns();
            const msg = currentLanguage === 'pt-BR' 
                ? `Lançamento efetuado. Estoque de ${pestName} aumentado em ${qty}L!` 
                : `¡Transacción registrada. Stock de ${pestName} aumentado en ${qty}L!`;
            showToast(msg);
        } else {
            showToast(currentLanguage === 'pt-BR' ? 'Lançamento efetuado!' : '¡Transacción registrada!');
        }
    }
}

function deleteTransaction(id) {
    const tx = db.transactions.find(t => t.id === id);
    if (tx) {
        if (tx.movement_id) {
            db.pesticideMovements = db.pesticideMovements.filter(m => m.id !== tx.movement_id);
        } else {
            db.pesticideMovements = db.pesticideMovements.filter(m => m.id !== 'mov-' + id && m.id !== id.replace('tx-', ''));
        }
        const pest = db.pesticides.find(p => p.id === tx.pesticide_id);
        if (pest) {
            pest.stock_liters = getPesticideStock(pest.id);
        }
    }
    
    db.transactions = db.transactions.filter(t => t.id !== id);
    saveDatabaseLocally();
    renderFinancialView();
    renderDashboard();
    renderInsumosView();
    renderInventarioView();
    populateSelectDropdowns();
}

function toggleFinanceInsumoFields() {
    const category = document.getElementById('fin-category').value;
    const type = document.getElementById('fin-type').value;
    const insumoGroup = document.getElementById('fin-insumo-group');
    
    if (insumoGroup) {
        if (category === 'Insumos' && type === 'gasto') {
            insumoGroup.classList.remove('hidden');
            document.getElementById('fin-pesticide-qty').setAttribute('required', 'true');
        } else {
            insumoGroup.classList.add('hidden');
            document.getElementById('fin-pesticide-qty').removeAttribute('required');
        }
    }
}

// ==================== 9. UI MODAL UTILS ====================
function openModal(modalId) {
    document.getElementById('modal-backdrop').classList.remove('hidden');
    document.getElementById(modalId).classList.remove('hidden');
    
    if (modalId === 'modal-add-financa') {
        const finPestQty = document.getElementById('fin-pesticide-qty');
        if (finPestQty) finPestQty.value = '';
        toggleFinanceInsumoFields();
    }
    
    if (modalId === 'modal-add-semente-grao') {
        const costTypeSelect = document.getElementById('seed-grain-cost-type');
        if (costTypeSelect) {
            costTypeSelect.value = 'Saca';
        }
        const calcFields = document.getElementById('seed-grain-cost-calc-fields');
        if (calcFields) {
            calcFields.classList.remove('hidden');
        }
        const qtyEl = document.getElementById('seed-grain-qty');
        if (qtyEl) qtyEl.value = '';
        const nameEl = document.getElementById('seed-grain-name');
        if (nameEl) nameEl.value = '';
        const unitPriceEl = document.getElementById('seed-grain-unit-price');
        if (unitPriceEl) unitPriceEl.value = '';
        const areaEl = document.getElementById('seed-grain-area');
        if (areaEl) areaEl.value = '';
        const costEl = document.getElementById('seed-grain-cost');
        if (costEl) costEl.value = '';
        const autoTxEl = document.getElementById('seed-grain-auto-tx');
        if (autoTxEl) autoTxEl.checked = true;
        onSeedGrainProductChange();
    }
    
    // Preset weather values dynamically inside apply modals
    if (modalId === 'modal-add-insumo-aplicacao') {
        const weatherInput = document.getElementById('apply-weather');
        if (weatherInput) {
            weatherInput.value = `${currentLanguage === 'pt-BR' ? 'Ensolarado' : 'Soleado'}, ${simulatedTemp}°C, ${currentLanguage === 'pt-BR' ? 'Vento' : 'Viento'} ${simulatedWindSpeed} km/h`;
        }
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    
    // Check if other modals are open
    const openModals = document.querySelectorAll('.modal-window:not(.hidden)');
    if (openModals.length === 0) {
        document.getElementById('modal-backdrop').classList.add('hidden');
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal-window').forEach(win => win.classList.add('hidden'));
    document.getElementById('modal-backdrop').classList.add('hidden');
}

// ==================== 10. AI ASSISTANT CHAT ENGINE (AGRI IA) ====================

let voiceRecognition = null;
let isVoiceListening = false;

function toggleAIChat() {
    const chat = document.getElementById('ai-chat-box');
    chat.classList.toggle('hidden');
    if (!chat.classList.contains('hidden')) {
        // Scroll to bottom
        setTimeout(() => {
            const chatMessages = document.getElementById('ai-chat-messages');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
    }
}

function clearAIChat() {
    const chatMsgs = document.getElementById('ai-chat-messages');
    chatMsgs.innerHTML = `
        <div class="chat-bubble-wrapper received flex gap-2">
            <div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0 border border-primary">
                <span class="material-symbols-outlined text-sm font-bold text-primary">smart_toy</span>
            </div>
            <div class="chat-bubble bg-primary-container/20 border border-primary-container/30 p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[80%]">
                <p data-i18n="chat_welcome">${translations[currentLanguage].chat_welcome}</p>
                <ul class="list-disc ml-4 mt-2 font-semibold">
                    <li data-i18n="chat_prompt_1">${translations[currentLanguage].chat_prompt_1}</li>
                    <li data-i18n="chat_prompt_2">${translations[currentLanguage].chat_prompt_2}</li>
                    <li data-i18n="chat_prompt_3">${translations[currentLanguage].chat_prompt_3}</li>
                </ul>
                <p class="mt-2" data-i18n="chat_welcome_camera">${translations[currentLanguage].chat_welcome_camera}</p>
            </div>
        </div>
    `;
}

function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function addMessageToChat(text, isSentByMe = false, customHtml = '') {
    const chatMsgs = document.getElementById('ai-chat-messages');
    const wrapper = document.createElement('div');
    wrapper.className = `chat-bubble-wrapper flex gap-2 ${isSentByMe ? 'sent' : 'received'}`;
    
    let avatar = '';
    if (!isSentByMe) {
        avatar = `
            <div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0 border border-primary">
                <span class="material-symbols-outlined text-sm font-bold text-primary">smart_toy</span>
            </div>
        `;
    }
    
    const bubbleContent = customHtml ? customHtml : `<p>${escapeHTML(text)}</p>`;
    const bubbleBg = isSentByMe 
        ? 'bg-primary-container text-on-primary-container border border-primary'
        : 'bg-primary-container/20 border border-primary-container/30 dark:bg-surface-container-high';
        
    wrapper.innerHTML = `
        ${avatar}
        <div class="chat-bubble ${bubbleBg} p-3 rounded-2xl text-xs leading-relaxed max-w-[80%]">
            ${bubbleContent}
        </div>
    `;
    
    chatMsgs.appendChild(wrapper);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function handleChatInputKey(e) {
    if (e.key === 'Enter') {
        sendChatTextMessage();
    }
}

function sendChatTextMessage() {
    const input = document.getElementById('ai-chat-input');
    const txt = input.value.trim();
    if (!txt) return;
    
    // 1. Post my text
    addMessageToChat(txt, true);
    input.value = '';
    
    // 2. Parse text command with NLP simulator
    setTimeout(() => {
        processAICommand(txt);
    }, 800);
}

// ==================== 11. VOICE SPEECH COMMANDS NLP PARSER ====================
function toggleVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showToast("Seu navegador não suporta reconhecimento de voz!", true);
        return;
    }
    
    if (isVoiceListening) {
        // Stop
        if (voiceRecognition) {
            voiceRecognition.stop();
        }
        isVoiceListening = false;
        document.getElementById('voice-wave-container').classList.add('hidden');
        document.getElementById('mic-icon').textContent = 'mic';
        return;
    }
    
    voiceRecognition = new SpeechRecognition();
    voiceRecognition.lang = currentLanguage;
    voiceRecognition.continuous = false;
    voiceRecognition.interimResults = true;
    
    let finalTranscript = '';
    
    voiceRecognition.onstart = () => {
        isVoiceListening = true;
        document.getElementById('voice-wave-container').classList.remove('hidden');
        document.getElementById('mic-icon').textContent = 'stop';
        document.getElementById('voice-listening-txt').textContent = currentLanguage === 'pt-BR' 
            ? 'AgriIA ouvindo seu comando por voz...' 
            : 'AgriIA escuchando su comando por voz...';
    };
    
    voiceRecognition.onerror = (e) => {
        console.error("Speech Recognition Error:", e);
        isVoiceListening = false;
        document.getElementById('voice-wave-container').classList.add('hidden');
        document.getElementById('mic-icon').textContent = 'mic';
        showToast("Erro ao ouvir comando de voz", true);
    };
    
    voiceRecognition.onend = () => {
        isVoiceListening = false;
        document.getElementById('voice-wave-container').classList.add('hidden');
        document.getElementById('mic-icon').textContent = 'mic';
        
        // Hands-free auto-submission when transcription finishes
        const inputField = document.getElementById('ai-chat-input');
        if (inputField && inputField.value.trim() !== '') {
            sendChatTextMessage();
        }
    };
    
    voiceRecognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        const text = (finalTranscript + interimTranscript).trim();
        const inputField = document.getElementById('ai-chat-input');
        if (inputField) {
            inputField.value = text;
        }
    };
    
    voiceRecognition.start();
}


// Speech NLP Core Pattern Matcher (PT-BR / ES-PY)
function detectPesticideFromText(text) {
    const cleanText = text.toLowerCase();
    return db.pesticides.find(p => cleanText.includes(p.name.toLowerCase()));
}

function processAICommand(text) {
    let cleanText = text.toLowerCase();
    
    // ==================== 0. EXTENDED DIRECT ENTITY VOICE COMMANDS ====================
    const isPt = currentLanguage === 'pt-BR';
    
    // 0.0 REPORT MODULE IA GENERATION
    if (cleanText.includes('relatório') || cleanText.includes('relatorio') || cleanText.includes('reporte') || cleanText.includes('reportes') || cleanText.includes('imprimir relatório') || cleanText.includes('imprimir reporte')) {
        const parsed = parseAndApplyReportFilters(text);
        if (parsed) {
            switchTab('relatorios');
            const responseText = isPt
                ? `📄 **Relatório Gerado!** Mudei você para a aba de **Relatórios & Análises** e apliquei os filtros baseados no seu comando: *"${text}"*.`
                : `📄 **¡Reporte Generado!** Le he llevado a la pestaña de **Reportes & Análisis** y apliqué los filtros correspondientes basados en su comando: *"${text}"*.`;
            addMessageToChat(responseText);
            speakResponseText(isPt ? 'Relatório gerado com sucesso.' : 'Reporte generado con éxito.');
            return;
        }
    }
    
    // 0.1 CREATE PLOT / TALHÃO / LOTE
    if (
        cleanText.includes('adicionar talhão') || cleanText.includes('adicionar talhao') ||
        cleanText.includes('adicionar lote') || cleanText.includes('adicionar área') || cleanText.includes('adicionar area') ||
        cleanText.includes('cadastrar talhão') || cleanText.includes('cadastrar talhao') ||
        cleanText.includes('cadastrar lote') || cleanText.includes('cadastrar área') || cleanText.includes('cadastrar area') ||
        cleanText.includes('novo talhão') || cleanText.includes('novo talhao') ||
        cleanText.includes('novo lote') || cleanText.includes('nova área') || cleanText.includes('nova area') ||
        cleanText.includes('agregar lote') || cleanText.includes('agregar chacra') ||
        cleanText.includes('agregar área') || cleanText.includes('agregar area') ||
        cleanText.includes('registrar lote') || cleanText.includes('registrar chacra') ||
        cleanText.includes('registrar área') || cleanText.includes('registrar area') ||
        cleanText.includes('nuevo lote') || cleanText.includes('nueva chacra') || cleanText.includes('nueva area')
    ) {
        // Extract size
        let sizeVal = 0;
        let isAlqueire = false;
        
        // Find number and check if alqueire or hectare follows
        const sizeMatch = cleanText.match(/(\d+[\d\.,]*)\s*(hectares|hectare|ha|alqueires|alqueire|alq)\b/i);
        if (sizeMatch) {
            sizeVal = parseFloat(sizeMatch[1].replace(/\./g, '').replace(',', '.'));
            if (sizeMatch[2].toLowerCase().includes('alq') || sizeMatch[2].toLowerCase().includes('alqueire')) {
                isAlqueire = true;
            }
        } else {
            // Fallback: look for any number
            const simpleNum = cleanText.match(/(\d+[\d\.,]*)/);
            if (simpleNum) {
                sizeVal = parseFloat(simpleNum[0].replace(/\./g, '').replace(',', '.'));
            }
        }
        
        if (sizeVal === 0) sizeVal = 50; // default size
        
        let size_hectares = 0;
        let size_alqueires = 0;
        
        if (isAlqueire) {
            size_alqueires = sizeVal;
            size_hectares = sizeVal * 2.42;
        } else {
            size_hectares = sizeVal;
            size_alqueires = sizeVal / 2.42;
        }
        
        // Crop type
        let cropType = 'Soja';
        if (cleanText.includes('milho') || cleanText.includes('maiz') || cleanText.includes('maíz') || cleanText.includes('corn')) {
            cropType = isPt ? 'Milho' : 'Maíz';
        } else if (cleanText.includes('trigo') || cleanText.includes('wheat')) {
            cropType = 'Trigo';
        } else if (cleanText.includes('pasto') || cleanText.includes('pastagem') || cleanText.includes('pastura') || cleanText.includes('descanso')) {
            cropType = isPt ? 'Pasto' : 'Pastura';
        } else if (cleanText.includes('soja') || cleanText.includes('soy')) {
            cropType = 'Soja';
        }
        
        // Plot Name Extraction
        let plotName = '';
        // Look for capitalized words or words after "talhão", "lote", "chacra"
        const words = text.split(/\s+/);
        let foundIndicator = false;
        let nameWords = [];
        for (let i = 0; i < words.length; i++) {
            const wClean = words[i].toLowerCase();
            if (foundIndicator) {
                // If we reach size numbers or crop types, stop
                if (wClean.match(/\d+/) || wClean.includes('ha') || wClean.includes('hectare') || wClean.includes('alq') || wClean.includes('alqueire') || 
                    wClean.includes('com') || wClean.includes('de') || wClean.includes('con') || 
                    wClean.includes('soja') || wClean.includes('milho') || wClean.includes('maiz') || wClean.includes('trigo') || wClean.includes('pasto')) {
                    break;
                }
                nameWords.push(words[i]);
            }
            if (wClean.includes('talhão') || wClean.includes('talhao') || wClean.includes('lote') || wClean.includes('chacra') || wClean.includes('área') || wClean.includes('area')) {
                foundIndicator = true;
            }
        }
        
        if (nameWords.length > 0) {
            plotName = nameWords.join(' ');
        } else {
            // Fallback
            plotName = isPt ? `Talhão Leste ${db.plots.length + 1}` : `Lote Este ${db.plots.length + 1}`;
        }
        
        // Capitalize plot name properly
        plotName = plotName.charAt(0).toUpperCase() + plotName.slice(1);
        // Clean trailing commas/prepositions
        plotName = plotName.replace(/^(de|do|da|para|con|de\s+la)\s+/i, '').replace(/[\.,\?]$/, '').trim();
        
        const newPlotId = 'plot-' + (db.plots.length + 1);
        
        const newPlot = {
            id: newPlotId,
            name: plotName,
            size_hectares: parseFloat(size_hectares.toFixed(1)),
            size_alqueires: parseFloat(size_alqueires.toFixed(2)),
            crop_type: cropType,
            status: 'Ativo'
        };
        
        db.plots.push(newPlot);
        saveDatabaseLocally();
        renderPlotsView();
        renderDashboard();
        populateSelectDropdowns();
        
        const responseText = isPt
            ? `Muito bem! Cadastrei o **${plotName}** com **${newPlot.size_hectares} ha** (${newPlot.size_alqueires} alq) cultivando **${cropType}**.`
            : `¡Excelente! Registré el **${plotName}** con **${newPlot.size_hectares} ha** (${newPlot.size_alqueires} alq) cultivando **${cropType}**.`;
            
        addMessageToChat(responseText);
        speakResponseText(responseText);
        return;
    }
    
    // 0.2 CREATE MACHINERY / MÁQUINA
    if (
        (cleanText.includes('adicionar máquina') || cleanText.includes('adicionar maquina') ||
         cleanText.includes('cadastrar máquina') || cleanText.includes('cadastrar maquina') ||
         cleanText.includes('nova máquina') || cleanText.includes('nova maquina') ||
         cleanText.includes('adicionar trator') || cleanText.includes('adicionar colheitadeira') ||
         cleanText.includes('adicionar pulverizador') || cleanText.includes('adicionar semeadora') ||
         cleanText.includes('agregar máquina') || cleanText.includes('agregar maquina') ||
         cleanText.includes('registrar máquina') || cleanText.includes('registrar maquina') ||
         cleanText.includes('nueva máquina') || cleanText.includes('nueva maquina') ||
         cleanText.includes('agregar tractor') || cleanText.includes('agregar cosechadora') ||
         cleanText.includes('agregar pulverizador') || cleanText.includes('agregar sembradora')) &&
         !cleanText.includes('compra') && !cleanText.includes('gasto') // ensure not a purchase transaction
    ) {
        // Extract type
        let machType = 'Trator';
        if (cleanText.includes('colheitadeira') || cleanText.includes('cosechadora') || cleanText.includes('colheitadora')) {
            machType = isPt ? 'Colheitadeira' : 'Cosechadora';
        } else if (cleanText.includes('pulverizador') || cleanText.includes('spray')) {
            machType = 'Pulverizador';
        } else if (cleanText.includes('semeadora') || cleanText.includes('sembradora')) {
            machType = isPt ? 'Semeadora' : 'Sembradora';
        } else if (cleanText.includes('trator') || cleanText.includes('tractor')) {
            machType = isPt ? 'Trator' : 'Tractor';
        }
        
        // Fuel level extraction
        let fuelVal = 100;
        const fuelMatch = cleanText.match(/(\d+)\s*(%|por cento|por ciento|porcento)?/);
        if (fuelMatch) {
            fuelVal = Math.min(100, Math.max(0, parseInt(fuelMatch[1])));
        }
        
        // Machine Name / Model extraction
        let machName = '';
        const words = text.split(/\s+/);
        let foundIndicator = false;
        let nameWords = [];
        for (let i = 0; i < words.length; i++) {
            const wClean = words[i].toLowerCase();
            if (foundIndicator) {
                if (wClean.match(/\d+/) || wClean.includes('%') || wClean.includes('combustivel') || wClean.includes('combustível') || wClean.includes('gasoil') || wClean.includes('com') || wClean.includes('con') || wClean.includes('tipo')) {
                    break;
                }
                nameWords.push(words[i]);
            }
            if (wClean.includes('máquina') || wClean.includes('maquina') || wClean.includes('trator') || wClean.includes('tractor') || wClean.includes('colheitadeira') || wClean.includes('cosechadora') || wClean.includes('pulverizador') || wClean.includes('semeadora') || wClean.includes('sembradora')) {
                foundIndicator = true;
            }
        }
        
        if (nameWords.length > 0) {
            machName = nameWords.join(' ');
        } else {
            machName = isPt ? `Máquina de Campo ${db.machinery.length + 1}` : `Máquina de Campo ${db.machinery.length + 1}`;
        }
        
        machName = machName.charAt(0).toUpperCase() + machName.slice(1);
        machName = machName.replace(/^(de|do|da|para|con|de\s+la|tipo)\s+/i, '').replace(/[\.,\?]$/, '').trim();
        
        const newMachId = 'mach-' + (db.machinery.length + 1);
        
        const newMach = {
            id: newMachId,
            name: machName,
            type: machType,
            fuel_level_percent: fuelVal,
            status: 'Ativo',
            last_action: isPt ? 'Pronto para Trabalho' : 'Listo para el Trabajo'
        };
        
        db.machinery.push(newMach);
        saveDatabaseLocally();
        renderRecursosView();
        populateSelectDropdowns();
        
        const responseText = isPt
            ? `Entendido! Cadastrei a máquina **${machName}** (Tipo: **${machType}**) com **${fuelVal}%** de combustível no painel.`
            : `¡Entendido! Registré la máquina **${machName}** (Tipo: **${machType}**) con **${fuelVal}%** de combustible en el panel.`;
            
        addMessageToChat(responseText);
        speakResponseText(responseText);
        return;
    }
    
    // 0.3 CREATE STAFF / FUNCIONÁRIO / COLABORADOR
    if (
        cleanText.includes('adicionar funcionário') || cleanText.includes('adicionar funcionario') ||
        cleanText.includes('adicionar colaborador') || cleanText.includes('adicionar diarista') ||
        cleanText.includes('cadastrar funcionário') || cleanText.includes('cadastrar funcionario') ||
        cleanText.includes('cadastrar colaborador') || cleanText.includes('cadastrar diarista') ||
        cleanText.includes('novo colaborador') || cleanText.includes('novo funcionário') || cleanText.includes('novo funcionario') ||
        cleanText.includes('contratar') ||
        cleanText.includes('agregar personal') || cleanText.includes('agregar empleado') ||
        cleanText.includes('agregar colaborador') || cleanText.includes('agregar diarista') ||
        cleanText.includes('registrar personal') || cleanText.includes('registrar empleado') ||
        cleanText.includes('registrar colaborador') || cleanText.includes('registrar diarista') ||
        cleanText.includes('nuevo personal') || cleanText.includes('nuevo empleado')
    ) {
        // Extract wage/rate
        let wageRate = 0;
        const wageMatch = cleanText.match(/(\d+[\d\.,]*)/);
        if (wageMatch) {
            wageRate = parseFloat(wageMatch[0].replace(/\./g, '').replace(',', '.'));
        }
        if (wageRate === 0) wageRate = 2500; // default wage
        
        // Currency detection
        let staffCurrency = 'BRL';
        if (cleanText.includes('dolar') || cleanText.includes('dólar') || cleanText.includes('usd') || cleanText.includes('dólares')) {
            staffCurrency = 'USD';
        } else if (cleanText.includes('guarani') || cleanText.includes('guaraníes') || cleanText.includes('pyg') || cleanText.includes('guaranis') || cleanText.includes('gs')) {
            staffCurrency = 'PYG';
        }
        
        // Staff Type (CLT or Diarista)
        let staffType = 'CLT';
        if (cleanText.includes('diarista') || cleanText.includes('jornalero') || cleanText.includes('diária') || cleanText.includes('diaria')) {
            staffType = 'Diarista';
        }
        
        // Staff Role
        let staffRole = 'Operador';
        if (cleanText.includes('gerente') || cleanText.includes('administrador') || cleanText.includes('gestor')) {
            staffRole = 'Gerente';
        } else if (cleanText.includes('tratorista') || cleanText.includes('tractorista') || cleanText.includes('operador')) {
            staffRole = isPt ? 'Operador de Trator' : 'Operador de Tractor';
        } else if (cleanText.includes('auxiliar') || cleanText.includes('peão') || cleanText.includes('peon')) {
            staffRole = 'Auxiliar';
        }
        
        // Staff Name extraction
        let staffName = '';
        const words = text.split(/\s+/);
        let foundIndicator = false;
        let nameWords = [];
        for (let i = 0; i < words.length; i++) {
            const wClean = words[i].toLowerCase();
            if (foundIndicator) {
                // If we reach role keywords, salary numbers, prepositions, stop
                if (wClean.match(/\d+/) || wClean.includes('como') || wClean.includes('com') || wClean.includes('con') || wClean.includes('cargo') || wClean.includes('salario') || wClean.includes('salário') || wClean.includes('clt') || wClean.includes('diarista') || wClean.includes('jornalero')) {
                    break;
                }
                nameWords.push(words[i]);
            }
            if (wClean.includes('funcionário') || wClean.includes('funcionario') || wClean.includes('colaborador') || wClean.includes('diarista') || wClean.includes('personal') || wClean.includes('empleado') || wClean.includes('contratar')) {
                foundIndicator = true;
            }
        }
        
        if (nameWords.length > 0) {
            staffName = nameWords.join(' ');
        } else {
            staffName = `Colaborador ${db.staff.length + 1}`;
        }
        
        staffName = staffName.charAt(0).toUpperCase() + staffName.slice(1);
        staffName = staffName.replace(/^(de|do|da|para|con|de\s+la|como)\s+/i, '').replace(/[\.,\?]$/, '').trim();
        
        const newStaffId = 'staff-' + (db.staff.length + 1);
        
        const newStaff = {
            id: newStaffId,
            name: staffName,
            role: staffRole,
            type: staffType,
            wage_rate: wageRate,
            currency: staffCurrency
        };
        
        db.staff.push(newStaff);
        saveDatabaseLocally();
        renderRecursosView();
        
        const formattedWage = formatCurrency(wageRate, staffCurrency);
        const responseText = isPt
            ? `Perfeito! Contratei o colaborador **${staffName}** como **${staffRole}** (Regime: **${staffType}**, Salário/Diária: **${formattedWage}**).`
            : `¡Perfecto! Contraté al colaborador **${staffName}** como **${staffRole}** (Régimen: **${staffType}**, Salario/Jornal: **${formattedWage}**).`;
            
        addMessageToChat(responseText);
        speakResponseText(responseText);
        return;
    }
    
    // 0.4 CREATE PESTICIDE / INSUMO EM ESTOQUE
    if (
        (cleanText.includes('adicionar insumo') || cleanText.includes('adicionar defensivo') || cleanText.includes('adicionar agroquímico') ||
         cleanText.includes('cadastrar insumo') || cleanText.includes('cadastrar defensivo') || cleanText.includes('cadastrar agroquímico') ||
         cleanText.includes('novo insumo') || cleanText.includes('novo defensivo') || cleanText.includes('novo agroquímico') ||
         cleanText.includes('agregar insumo') || cleanText.includes('agregar defensivo') || cleanText.includes('agregar agroquímico') ||
         cleanText.includes('registrar insumo') || cleanText.includes('registrar defensivo') || cleanText.includes('registrar agroquímico') ||
         cleanText.includes('nuevo insumo') || cleanText.includes('nuevo defensivo')) &&
         !cleanText.includes('compra') && !cleanText.includes('gasto') // ensure not a purchase transaction
    ) {
        // Extract volume/liters
        let litersVal = 100; // default liters
        const volMatch = cleanText.match(/(\d+[\d\.,]*)\s*(litros|litro|l)\b/i);
        if (volMatch) {
            litersVal = parseFloat(volMatch[1].replace(/\./g, '').replace(',', '.'));
        } else {
            // Try simple number
            const simpleNum = cleanText.match(/(\d+[\d\.,]*)/);
            if (simpleNum) {
                litersVal = parseFloat(simpleNum[0].replace(/\./g, '').replace(',', '.'));
            }
        }
        
        // Pesticide Type
        let pestType = 'Herbicida';
        if (cleanText.includes('fungicida')) {
            pestType = 'Fungicida';
        } else if (cleanText.includes('inseticida')) {
            pestType = 'Inseticida';
        } else if (cleanText.includes('herbicida')) {
            pestType = 'Herbicida';
        }
        
        // Pesticide Name extraction
        let pestName = '';
        const words = text.split(/\s+/);
        let foundIndicator = false;
        let nameWords = [];
        for (let i = 0; i < words.length; i++) {
            const wClean = words[i].toLowerCase();
            if (foundIndicator) {
                if (wClean.match(/\d+/) || wClean.includes('tipo') || wClean.includes('com') || wClean.includes('con') || wClean.includes('litro') || wClean.includes('l') || wClean.includes('fungicida') || wClean.includes('herbicida') || wClean.includes('inseticida')) {
                    break;
                }
                nameWords.push(words[i]);
            }
            if (wClean.includes('insumo') || wClean.includes('defensivo') || wClean.includes('agroquímico') || wClean.includes('agroquimico')) {
                foundIndicator = true;
            }
        }
        
        if (nameWords.length > 0) {
            pestName = nameWords.join(' ');
        } else {
            pestName = `Defensivo ${db.pesticides.length + 1}`;
        }
        
        pestName = pestName.charAt(0).toUpperCase() + pestName.slice(1);
        pestName = pestName.replace(/^(de|do|da|para|con|de\s+la|tipo)\s+/i, '').replace(/[\.,\?]$/, '').trim();
        
        const newPestId = 'pest-' + (db.pesticides.length + 1);
        
        const newPesticide = {
            id: newPestId,
            name: pestName,
            type: pestType,
            stock_liters: litersVal
        };
        
        db.pesticides.push(newPesticide);
        saveDatabaseLocally();
        renderInsumosView();
        renderInventarioView();
        populateSelectDropdowns();
        
        const responseText = isPt
            ? `Sucesso! Cadastrei o defensivo **${pestName}** (Tipo: **${pestType}**) com estoque inicial de **${litersVal} Litros**.`
            : `¡Éxito! Registré el defensivo **${pestName}** (Tipo: **${pestType}**) con stock inicial de **${litersVal} Litros**.`;
            
        addMessageToChat(responseText);
        speakResponseText(responseText);
        return;
    }

    cleanText = text.toLowerCase();
    
    // Quantity regex to parse double-numbers: e.g. money amount and pesticide/grain/seed qty
    const qtyRegex = /(\d+[\d\.,]*)\s*(litros|litro|l|kg|kilos|kilo|unidades|unidade|sacos|saco|sc|bolsas|bolsa|toneladas|tonelada|t)\b/i;
    const qtyMatch = cleanText.match(qtyRegex);
    let qty = 0;
    if (qtyMatch) {
        qty = parseFloat(qtyMatch[1].replace(/\./g, '').replace(',', '.'));
        // Strip the quantity portion from the cleanText to avoid conflicting with finance amount parsing
        cleanText = cleanText.replace(qtyMatch[0], '');
    }
    
    // Also captures numbers
    const numRegex = /(\d+[\d\.,]*)/;
    const valueMatch = cleanText.match(numRegex);
    let amount = valueMatch ? parseFloat(valueMatch[0].replace(/\./g, '').replace(',', '.')) : 0;
    
    // Currency detection with typo tolerance
    let detectedCurrency = 'BRL';
    if (cleanText.includes('dolar') || cleanText.includes('dólar') || cleanText.includes('usd') || cleanText.includes('dólares')) {
        detectedCurrency = 'USD';
    } else if (
        cleanText.includes('guarani') || 
        cleanText.includes('guaraníes') || 
        cleanText.includes('pyg') || 
        cleanText.includes('guaranis') || 
        cleanText.includes('gaurani') || 
        cleanText.includes('gauranies') || 
        cleanText.includes('gs')
    ) {
        detectedCurrency = 'PYG';
    } else if (cleanText.includes('real') || cleanText.includes('reais') || cleanText.includes('brl')) {
        detectedCurrency = 'BRL';
    }

    // Number translation logic for typical lay speech (e.g. "cem", "cinquenta", "mil")
    if (amount === 0) {
        if (cleanText.includes(' cem ') || cleanText.includes(' cien ')) amount = 100;
        else if (cleanText.includes(' mil ')) amount = 1000;
        else if (cleanText.includes(' cinquenta ') || cleanText.includes(' cincuenta ')) amount = 50;
        else if (cleanText.includes(' dez ') || cleanText.includes(' diez ')) amount = 10;
        else if (cleanText.includes(' vinte ') || cleanText.includes(' veinte ')) amount = 20;
    }

    // If unit price multiplier is present (e.g. "o litro", "por litro", "cada"), multiply the amount by quantity
    const hasUnitPriceIndicator = cleanText.includes('o litro') || 
                                  cleanText.includes('por litro') || 
                                  cleanText.includes('o l') || 
                                  cleanText.includes('por l') || 
                                  cleanText.includes('cada') || 
                                  cleanText.includes('por kg') || 
                                  cleanText.includes('o kg') || 
                                  cleanText.includes('por quilo') || 
                                  cleanText.includes('o quilo') ||
                                  cleanText.includes('el litro') ||
                                  cleanText.includes('por litro') ||
                                  cleanText.includes('cada uno');
    
    if (qty > 0 && hasUnitPriceIndicator) {
        amount = amount * qty;
    }

    // 1. COMMAND DETECTED: EXPENDITURE / GASTO / DESPESA / COMPRA
    if (
        cleanText.includes('gasto') || 
        cleanText.includes('despesa') || 
        cleanText.includes('egreso') || 
        cleanText.includes('pago') || 
        cleanText.includes('compra') || 
        cleanText.includes('comprar') || 
        cleanText.includes('comprei')
    ) {
        if (amount > 0) {
            let cat = 'Outros';
            let desc = '';
            let pestId = null;
            let qtyPurchased = 0;
            let pestName = '';
            
            const detectedPest = detectPesticideFromText(text);
            
            if (cleanText.includes('diesel') || cleanText.includes('combustivel') || cleanText.includes('combustível') || cleanText.includes('gasoil')) {
                cat = 'Combustível';
                desc = currentLanguage === 'pt-BR' 
                    ? `Lançamento por Voz: Compra de Diesel${qty > 0 ? ' (' + qty + 'L)' : ''}` 
                    : `Registro de Voz: Compra de Gasoil${qty > 0 ? ' (' + qty + 'L)' : ''}`;
            } else if (cleanText.includes('semente') || cleanText.includes('semilla')) {
                cat = 'Insumos';
                let seedName = 'Soja';
                if (cleanText.includes('milho') || cleanText.includes('maiz') || cleanText.includes('maíz')) seedName = 'Milho';
                else if (cleanText.includes('trigo')) seedName = 'Trigo';
                desc = currentLanguage === 'pt-BR' 
                    ? `Lançamento por Voz: Compra de Semente de ${seedName}${qty > 0 ? ' (' + qty + ' sc)' : ''}` 
                    : `Registro de Voz: Compra de Semilla de ${seedName}${qty > 0 ? ' (' + qty + ' sc)' : ''}`;
            } else if (cleanText.includes('insumo') || cleanText.includes('defensivo') || cleanText.includes('veneno') || detectedPest) {
                cat = 'Insumos';
                if (detectedPest) {
                    pestId = detectedPest.id;
                    pestName = detectedPest.name;
                    qtyPurchased = qty > 0 ? qty : 0;
                    desc = currentLanguage === 'pt-BR' ? `Lançamento por Voz: Compra de ${pestName}` : `Registro de Voz: Compra de ${pestName}`;
                } else {
                    // Try to extract name after keyword "defensivo", "insumo", "veneno", "agroquímico", "agroquimico"
                    const keywords = ['defensivo', 'insumo', 'veneno', 'agroquímico', 'agroquimico'];
                    let words = cleanText.split(/\s+/);
                    let keywordIndex = -1;
                    for (const kw of keywords) {
                        keywordIndex = words.indexOf(kw);
                        if (keywordIndex !== -1) break;
                    }
                    if (keywordIndex !== -1 && keywordIndex < words.length - 1) {
                        let nameWord = words[keywordIndex + 1];
                        pestName = nameWord.charAt(0).toUpperCase() + nameWord.slice(1).replace(/[\.,\?]$/, '');
                    }
                    
                    if (!pestName || pestName.length <= 2) {
                        pestName = currentLanguage === 'pt-BR' ? 'Novo Defensivo' : 'Nuevo Defensivo';
                    }
                    
                    const newPestId = 'pest-' + (db.pesticides.length + 1);
                    const newPesticide = {
                        id: newPestId,
                        name: pestName,
                        type: 'Herbicida',
                        stock_liters: 0
                    };
                    db.pesticides.push(newPesticide);
                    pestId = newPestId;
                    qtyPurchased = qty > 0 ? qty : 0;
                    desc = currentLanguage === 'pt-BR' ? `Lançamento por Voz: Compra de ${pestName}` : `Registro de Voz: Compra de ${pestName}`;
                }
            } else if (cleanText.includes('diaria') || cleanText.includes('diária') || cleanText.includes('jornal') || cleanText.includes('salario') || cleanText.includes('salário')) {
                cat = 'Funcionários';
                desc = currentLanguage === 'pt-BR' ? 'Lançamento por Voz: Diária Trabalho' : 'Registro de Voz: Jornal de Campo';
            } else {
                desc = currentLanguage === 'pt-BR' ? 'Gasto registrado via Assistente de Voz' : 'Gasto registrado por Asistente de Voz';
            }
            
            // Register in database
            const txId = 'tx-' + (db.transactions.length + 1);
            const date = new Date().toISOString().split('T')[0];
            
            let txObj = { id: txId, date, type: 'gasto', description: desc, amount, currency: detectedCurrency, category: cat, plot_id: '' };
            
            let stockUpdated = false;
            if (cat === 'Insumos' && pestId && qtyPurchased > 0) {
                const pest = db.pesticides.find(p => p.id === pestId);
                if (pest) {
                    pest.stock_liters = (pest.stock_liters || 0) + qtyPurchased;
                    txObj.pesticide_id = pestId;
                    txObj.amount_purchased = qtyPurchased;
                    stockUpdated = true;
                }
            }
            
            let seedUpdated = false;
            if (cat === 'Insumos' && (cleanText.includes('semente') || cleanText.includes('semilla')) && qty > 0) {
                const activeSafra = db.safras.find(s => s.status === 'Vigente') || db.safras[0];
                const activeSafraId = activeSafra ? activeSafra.id : 'safra-1';
                
                let seedName = 'Soja';
                if (cleanText.includes('milho') || cleanText.includes('maiz') || cleanText.includes('maíz')) seedName = 'Milho';
                else if (cleanText.includes('trigo')) seedName = 'Trigo';
                
                const seedId = 'sg-' + (db.seedsGrains.length + 1);
                addLegacySeedGrainEntry({
                    id: seedId,
                    date,
                    type: 'Semente Comprada',
                    name: seedName,
                    quantity: qty,
                    unit: 'sc',
                    safra_id: activeSafraId,
                    cost: amount,
                    currency: detectedCurrency
                });
                seedUpdated = true;
            }
            
            let fuelUpdated = false;
            if (cat === 'Combustível' && qty > 0) {
                const fuelId = 'fuel-' + (db.fuelLogs.length + 1);
                const fuelDesc = currentLanguage === 'pt-BR' 
                    ? `Compra de Diesel por Voz (${qty}L)` 
                    : `Compra de Gasoil por Voz (${qty}L)`;
                addLegacyFuelLogEntry({
                    id: fuelId,
                    date,
                    desc: fuelDesc,
                    amount_liters: qty,
                    cost_value: amount,
                    currency: detectedCurrency
                });
                fuelUpdated = true;
            }
            
            db.transactions.unshift(txObj);
            
            saveDatabaseLocally();
            renderFinancialView();
            renderDashboard();
            
            let responseText = '';
            if (stockUpdated) {
                renderInsumosView();
                renderInventarioView();
                populateSelectDropdowns();
                responseText = currentLanguage === 'pt-BR'
                    ? `Perfeito! Registrei um gasto de **${formatCurrency(amount, detectedCurrency)}** para **${pestName}** (+${qtyPurchased}L no estoque).`
                    : `¡Perfecto! Registré un gasto de **${formatCurrency(amount, detectedCurrency)}** para **${pestName}** (+${qtyPurchased}L en stock).`;
            } else if (seedUpdated) {
                renderSeedsGrains();
                renderInventarioView();
                let seedName = 'Soja';
                if (cleanText.includes('milho') || cleanText.includes('maiz') || cleanText.includes('maíz')) seedName = 'Milho';
                else if (cleanText.includes('trigo')) seedName = 'Trigo';
                responseText = currentLanguage === 'pt-BR'
                    ? `Perfeito! Registrei um gasto de **${formatCurrency(amount, detectedCurrency)}** para a compra de **${qty} sacos** de semente de **${seedName}**.`
                    : `¡Perfecto! Registré un gasto de **${formatCurrency(amount, detectedCurrency)}** para la compra de **${qty} sacos** de semilla de **${seedName}**.`;
            } else if (fuelUpdated) {
                renderRecursosView();
                renderInventarioView();
                responseText = currentLanguage === 'pt-BR'
                    ? `Perfeito! Registrei a compra de **${qty} Litros** de Diesel por **${formatCurrency(amount, detectedCurrency)}** (+${qty}L no tanque central).`
                    : `¡Perfecto! Registré la compra de **${qty} Litros** de Gasoil por **${formatCurrency(amount, detectedCurrency)}** (+${qty}L en el tanque central).`;
            } else {
                responseText = currentLanguage === 'pt-BR'
                    ? `Perfeito! Registrei um gasto de **${formatCurrency(amount, detectedCurrency)}** para a categoria **${cat}**.`
                    : `¡Perfecto! Registré un gasto de **${formatCurrency(amount, detectedCurrency)}** para la categoría **${cat}**.`;
            }
                
            addMessageToChat(responseText);
            speakResponseText(responseText);
            return;
        }
    }

    // 2. COMMAND DETECTED: INCOME / RECEITA / INGRESO
    if (cleanText.includes('receita') || cleanText.includes('ingreso') || cleanText.includes('ganho') || cleanText.includes('venda') || cleanText.includes('venta')) {
        if (amount > 0) {
            const desc = currentLanguage === 'pt-BR' ? 'Receita: Venda registrada por Voz' : 'Ingreso: Venta registrada por Asistente';
            const txId = 'tx-' + (db.transactions.length + 1);
            const date = new Date().toISOString().split('T')[0];
            
            db.transactions.unshift({ id: txId, date, type: 'receita', description: desc, amount, currency: detectedCurrency, category: 'Colheita', plot_id: '' });
            
            saveDatabaseLocally();
            renderFinancialView();
            renderDashboard();
            
            const responseText = currentLanguage === 'pt-BR'
                ? `Registrado! Lancei um ganho financeiro de **${formatCurrency(amount, detectedCurrency)}** no livro caixa.`
                : `¡Registrado! Ingresé una ganancia financiera de **${formatCurrency(amount, detectedCurrency)}** en el libro diario.`;
                
            addMessageToChat(responseText);
            speakResponseText(responseText);
            return;
        }
    }

    // 3. COMMAND DETECTED: PESTICIDE PULVERIZATION / APLICAÇÃO
    if (cleanText.includes('aplicar') || cleanText.includes('pulverizar') || cleanText.includes('veneno') || cleanText.includes('defensivo')) {
        let pestId = 'pest-1'; // Default Fungicide
        let appliedAmount = amount > 0 ? amount : 15; // default liters
        
        const detectedPest = detectPesticideFromText(text);
        if (detectedPest) {
            pestId = detectedPest.id;
        } else {
            if (cleanText.includes('roundup') || cleanText.includes('glifosato')) {
                pestId = 'pest-2';
            } else if (cleanText.includes('engeo') || cleanText.includes('inseticida')) {
                pestId = 'pest-3';
            }
        }
        
        // Plot detection
        let plotId = 'plot-1'; // Default
        if (cleanText.includes('sul') || cleanText.includes('milho') || cleanText.includes('lote 2') || cleanText.includes('talhão 2')) {
            plotId = 'plot-2';
        } else if (cleanText.includes('leste') || cleanText.includes('trigo') || cleanText.includes('lote 3') || cleanText.includes('talhão 3')) {
            plotId = 'plot-3';
        }

        const pestName = db.pesticides.find(p => p.id === pestId)?.name;
        const plotName = db.plots.find(p => p.id === plotId)?.name;

        // Reduce stock in inventory
        const pest = db.pesticides.find(p => p.id === pestId);
        if (pest && pest.stock_liters >= appliedAmount) {
            registerPesticideApplicationDirect(plotId, pestId, appliedAmount);
            
            const responseText = currentLanguage === 'pt-BR'
                ? `Entendido! Registrei a aplicação de **${appliedAmount} Litros** de **${pestName}** no **${plotName}**.`
                : `¡Entendido! Registré la aplicación de **${appliedAmount} Litros** de **${pestName}** en el **${plotName}**.`;
                
            addMessageToChat(responseText);
            speakResponseText(responseText);
        } else {
            const errorText = currentLanguage === 'pt-BR'
                ? `Estoque de **${pestName}** insuficiente no depósito central para a aplicação de ${appliedAmount} Litros.`
                : `Stock de **${pestName}** insuficiente en el depósito central para aplicar ${appliedAmount} Litros.`;
            addMessageToChat(errorText);
            speakResponseText(errorText);
        }
        return;
    }

    // 4. COMMAND DETECTED: CROP HARVEST
    if (cleanText.includes('colheita') || cleanText.includes('colher') || cleanText.includes('cosecha') || cleanText.includes('cosechar')) {
        let plot = null;
        for (const p of db.plots) {
            if (cleanText.includes(p.name.toLowerCase())) {
                plot = p;
                break;
            }
        }
        if (!plot && db.plots.length > 0) {
            plot = db.plots[0];
        }
        
        const plotName = plot ? plot.name : (isPt ? 'Talhão Geral' : 'Lote General');
        const plotId = plot ? plot.id : '';
        const bags = amount > 0 ? amount : 100;
        
        let crop = 'Soja';
        let pricePerBag = 140; // Default BRL for Soja
        
        if (cleanText.includes('milho') || cleanText.includes('maiz') || cleanText.includes('maíz') || (plot && (plot.crop_type.toLowerCase().includes('milho') || plot.crop_type.toLowerCase().includes('maí')))) {
            crop = isPt ? 'Milho' : 'Maíz';
            pricePerBag = 80;
        } else if (cleanText.includes('trigo') || (plot && plot.crop_type.toLowerCase().includes('trigo'))) {
            crop = 'Trigo';
            pricePerBag = 100;
        } else if (plot) {
            crop = plot.crop_type;
            if (crop.toLowerCase().includes('soja')) pricePerBag = 140;
            else if (crop.toLowerCase().includes('milho') || crop.toLowerCase().includes('maí')) pricePerBag = 80;
            else if (crop.toLowerCase().includes('trigo')) pricePerBag = 100;
        }
        
        let totalRevenueBrl = bags * pricePerBag;
        let convertedRevenue = convertValue(totalRevenueBrl, 'BRL', detectedCurrency);
        
        const txId = 'tx-' + (db.transactions.length + 1);
        const date = new Date().toISOString().split('T')[0];
        const desc = isPt 
            ? `Colheita por Voz: ${bags} sacas de ${crop} no ${plotName}`
            : `Cosecha por Voz: ${bags} sacos de ${crop} en ${plotName}`;
            
        db.transactions.unshift({
            id: txId,
            date,
            type: 'receita',
            description: desc,
            amount: parseFloat(convertedRevenue.toFixed(2)),
            currency: detectedCurrency,
            category: 'Colheita',
            plot_id: plotId
        });
        
        // Also register in seedsGrains inventory
        const activeSafra = db.safras.find(s => s.status === 'Vigente') || db.safras[0];
        const activeSafraId = activeSafra ? activeSafra.id : 'safra-1';
        const seedId = 'sg-' + (db.seedsGrains.length + 1);
        addLegacySeedGrainEntry({
            id: seedId,
            date,
            type: 'Grão Colhido',
            name: crop,
            quantity: bags,
            unit: 'sc',
            safra_id: activeSafraId,
            cost: totalRevenueBrl,
            currency: 'BRL',
            plot_id: plotId
        });
        
        saveDatabaseLocally();
        renderFinancialView();
        renderDashboard();
        renderInventarioView();
        renderSeedsGrains();
        
        const formattedAmount = formatCurrency(convertedRevenue, detectedCurrency);
        const responseText = isPt
            ? `Parabéns! Registrei a colheita de **${bags} sacas** de **${crop}** no **${plotName}**. Uma receita estimada de **${formattedAmount}** foi lançada no livro caixa!`
            : `¡Felicidades! Registré la cosecha de **${bags} sacos** de **${crop}** en el **${plotName}**. ¡Se ha ingresado una ganancia estimada de **${formattedAmount}** en el libro diario!`;
            
        addMessageToChat(responseText);
        speakResponseText(responseText);
        return;
    }

    // 5. COMMAND DETECTED: SEED TREATMENT / TRATAMENTO DE SEMENTES
    if (cleanText.includes('tratar semente') || cleanText.includes('tratei semente') || cleanText.includes('tratamento de semente') ||
        cleanText.includes('tratar semilla') || cleanText.includes('tratamiento de semilla') || cleanText.includes('tratamento semente')) {
        
        let qtyVal = qty > 0 ? qty : 20; // default quantity
        let seedName = 'Soja';
        if (cleanText.includes('milho') || cleanText.includes('maiz') || cleanText.includes('maíz')) seedName = 'Milho';
        else if (cleanText.includes('trigo')) seedName = 'Trigo';
        
        const activeSafra = db.safras.find(s => s.status === 'Vigente') || db.safras[0];
        const activeSafraId = activeSafra ? activeSafra.id : 'safra-1';
        
        const seedId = 'sg-' + (db.seedsGrains.length + 1);
        const date = new Date().toISOString().split('T')[0];
        
        addLegacySeedGrainEntry({
            id: seedId,
            date,
            type: 'Semente Tratada',
            name: seedName,
            quantity: qtyVal,
            unit: 'sc',
            safra_id: activeSafraId,
            cost: 0,
            currency: detectedCurrency
        });
        
        saveDatabaseLocally();
        renderSeedsGrains();
        renderInventarioView();
        
        const responseText = isPt
            ? `Muito bem! Registrei o tratamento de **${qtyVal} sacas** de semente de **${seedName}**.`
            : `¡Excelente! Registré el tratamiento de **${qtyVal} sacos** de semilla de **${seedName}**.`;
            
        addMessageToChat(responseText);
        speakResponseText(responseText);
        return;
    }

    // 6. COMMAND DETECTED: CREATE SAFRA
    if (cleanText.includes('adicionar safra') || cleanText.includes('cadastrar safra') || cleanText.includes('nova safra') ||
        cleanText.includes('agregar zafra') || cleanText.includes('registrar zafra') || cleanText.includes('nueva zafra')) {
        
        let safraName = '';
        // Extract safra name
        const words = text.split(/\s+/);
        let foundIndicator = false;
        let nameWords = [];
        for (let i = 0; i < words.length; i++) {
            const wClean = words[i].toLowerCase();
            if (foundIndicator) {
                if (wClean.includes('vigente') || wClean.includes('ativa') || wClean.includes('activa') || wClean.includes('com') || wClean.includes('con')) {
                    break;
                }
                nameWords.push(words[i]);
            }
            if (wClean.includes('safra') || wClean.includes('zafra')) {
                foundIndicator = true;
            }
        }
        
        if (nameWords.length > 0) {
            safraName = nameWords.join(' ');
        } else {
            safraName = isPt ? `Safra ${db.safras.length + 1}` : `Zafra ${db.safras.length + 1}`;
        }
        
        safraName = safraName.charAt(0).toUpperCase() + safraName.slice(1).replace(/[\.,\?]$/, '').trim();
        
        const newSafraId = 'safra-' + (db.safras.length + 1);
        const date = new Date();
        const startStr = date.toISOString().split('T')[0];
        // Set end date to 4 months later
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 4);
        const endStr = endDate.toISOString().split('T')[0];
        
        // Deactivate other safras
        db.safras.forEach(s => s.status = 'Encerrada');
        
        const newSafra = {
            id: newSafraId,
            name: safraName,
            start_date: startStr,
            end_date: endStr,
            status: 'Vigente'
        };
        
        db.safras.push(newSafra);
        saveDatabaseLocally();
        renderSafrasView();
        renderDashboard();
        populateSelectDropdowns();
        
        const responseText = isPt
            ? `Excelente! Cadastrei a **${safraName}** de ${startStr} a ${endStr} como safra vigente.`
            : `¡Excelente! Registré la **${safraName}** desde ${startStr} hasta ${endStr} como zafra vigente.`;
            
        addMessageToChat(responseText);
        speakResponseText(responseText);
        return;
    }

    // Conversational Fallback - Agricultural Consultant Advice
    let fallbackText = '';
    
    if (currentLanguage === 'pt-BR') {
        if (cleanText.includes('oi') || cleanText.includes('ola') || cleanText.includes('olá') || cleanText.includes('bom dia') || cleanText.includes('boa tarde') || cleanText.includes('boa noite')) {
            fallbackText = "Olá, Produtor! Sou o AgriIA, seu consultor de campo inteligente. Posso ajudar você a lançar despesas, registrar receitas, planejar colheitas ou controlar o estoque de defensivos. Como posso ajudar você hoje?";
        } else if (cleanText.includes('ajuda') || cleanText.includes('como funciona') || cleanText.includes('comandos') || cleanText.includes('o que você faz') || cleanText.includes('funções')) {
            fallbackText = "Eu posso ajudar você com comandos práticos! Tente me dizer coisas como:\n\n" +
                           "• 📝 *'Registrar gasto de 300 reais com combustível'* ou *'gasto de 150 dólares'*;\n" +
                           "• 🌾 *'Registrar colheita de 150 sacas no Talhão Norte'*;\n" +
                           "• 🧪 *'Aplicar 15 litros de Engeo Pleno no Talhão Sul'*;\n" +
                           "• 💰 *'Receita de 5000 reais com venda de grãos'*.";
        } else if (cleanText.includes('cascavel') || cleanText.includes('não estou em') || cleanText.includes('nao estou em') || cleanText.includes('localizacao') || cleanText.includes('localização') || cleanText.includes('onde estou') || cleanText.includes('gps')) {
            fallbackText = "Entendido! Se o clima ou a localização simulada de Cascavel não for a sua, você pode clicar no botão **'Usar GPS Real'** no painel de Clima. Assim, vou coletar as coordenadas reais do seu celular e carregar a previsão do tempo exata para a sua lavoura!";
        } else if (cleanText.includes('solo') || cleanText.includes('terra') || cleanText.includes('plantio') || cleanText.includes('plantar') || cleanText.includes('adubo') || cleanText.includes('fertilizante') || cleanText.includes('ndvi')) {
            fallbackText = "Para otimizar o manejo da terra e plantio, recomendo monitorar o índice de saúde NDVI na seção **'Áreas & Talhões'**. Um solo bem nutrido e o monitoramento em tempo real reduzem custos e elevam a produtividade!";
        } else if (cleanText.includes('estoque') || cleanText.includes('insumo') || cleanText.includes('defensivo') || cleanText.includes('comprar') || cleanText.includes('inventario') || cleanText.includes('inventário')) {
            fallbackText = "Você pode gerenciar seu estoque na seção **'Inventário'**. Sempre que cadastrar uma compra de insumos, a quantidade entrará no estoque vigente automaticamente, e ao registrar uma aplicação aqui no chat, ela será debitada do estoque.";
        } else {
            fallbackText = `Interessante! Analisando seu comentário sobre a lavoura, vale lembrar que o clima atual é de **${simulatedTemp}°C** com ventos de **${simulatedWindSpeed} km/h**. ${simulatedWindSpeed > 14 ? 'Recomendo adiar aplicações de defensivos agora devido ao vento forte (Risco de Deriva).' : 'As condições atmosféricas estão excelentes para atividades de campo e pulverização agora.'} Há mais algum dado ou registro financeiro que gostaria de lançar?`;
        }
    } else {
        if (cleanText.includes('hola') || cleanText.includes('buenos dias') || cleanText.includes('buenas tardes') || cleanText.includes('buenas noches') || cleanText.includes('buen dia')) {
            fallbackText = "¡Hola, Productor! Soy AgriIA, su consultor inteligente de campo. Le puedo ayudar a registrar egresos, ingresos, cosechas o controlar el stock de agroquímicos. ¿Cómo le puedo colaborar hoy?";
        } else if (cleanText.includes('ayuda') || cleanText.includes('como funciona') || cleanText.includes('comandos') || cleanText.includes('que haces') || cleanText.includes('funciones') || cleanText.includes('qué haces')) {
            fallbackText = "¡Le puedo ayudar con varios comandos prácticos! Intente decirme cosas como:\n\n" +
                           "• 📝 *'Gasto de 200 dólares en gasoil'*\n" +
                           "• 🌾 *'Registrar cosecha de 100 sacos en Lote 2'*\n" +
                           "• 🧪 *'Aplicar 12 litros de Roundup en Lote 1'*\n" +
                           "• 💰 *'Ingreso de 3000 reales por venta'*.";
        } else if (cleanText.includes('ciudad del este') || cleanText.includes('no estou') || cleanText.includes('localizacion') || cleanText.includes('donde estoy') || cleanText.includes('dónde estoy') || cleanText.includes('gps')) {
            fallbackText = "¡Entendido! Si la ubicación simulada de Ciudad del Este no coincide con su ubicación real, puede presionar el botón **'Usar GPS Real'** en el panel de Clima. ¡Así obtendré las coordenadas exactas de su posición actual y el clima de su finca!";
        } else if (cleanText.includes('suelo') || cleanText.includes('tierra') || cleanText.includes('siembra') || cleanText.includes('sembrar') || cleanText.includes('abono') || cleanText.includes('fertilizante') || cleanText.includes('ndvi')) {
            fallbackText = "Para optimizar la siembra y el abono, le recomiendo monitorear el índice de salud NDVI en la sección **'Áreas & Talhões'**. ¡El monitoreo satelital en tiempo real le ahorrará insumos!";
        } else if (cleanText.includes('stock') || cleanText.includes('insumo') || cleanText.includes('agroquimico') || cleanText.includes('comprar') || cleanText.includes('inventario')) {
            fallbackText = "Puede gestionar todo su stock en la sección **'Inventário'**. Al registrar la compra de insumos, ingresará al stock vigente, y al aplicar defensivos desde este chat, se debitará automáticamente.";
        } else {
            fallbackText = `¡Interesante! Al analizar su consulta sobre la finca, recuerde que el clima actual en su zona es de **${simulatedTemp}°C** con vientos de **${simulatedWindSpeed} km/h**. ${simulatedWindSpeed > 14 ? 'Recomiendo posponer la aplicación de defensivos debido a vientos fuertes (Riesgo de Deriva).' : 'Las condiciones atmosféricas están excelentes para actividades de campo y pulverización ahora.'} ¿Desea registrar algún movimiento financiero o actividad?`;
        }
    }
    
    addMessageToChat(fallbackText);
    speakResponseText(fallbackText);
}

// Text-to-Speech synthesizer
function speakResponseText(text) {
    if (!window.speechSynthesis) return;
    
    // Clean markdown bold stars from text for cleaner voice
    const cleanSpeechText = text.replace(/\*\*/g, '');
    
    const utter = new SpeechSynthesisUtterance(cleanSpeechText);
    utter.lang = currentLanguage;
    
    // Adjust slightly voice settings
    utter.rate = 1.0;
    utter.pitch = 1.0;
    
    window.speechSynthesis.speak(utter);
}

// ==================== 12. CROP PEST LEAF OCR PHOTO SCANNER ====================
function openPestPhotosSelector() {
    openModal('modal-pest-selector');
}

function selectPestSample(type) {
    closeModal('modal-pest-selector');
    toggleAIChat();
    
    // Renders uploading mock file visual inside chat
    const uploadHtml = `
        <div class="pest-scan-box rounded-xl overflow-hidden border border-outline-variant w-48 mb-2">
            <img alt="Diagnóstico" class="w-full h-24 object-cover" src="${
                type === 'ferrugem' ? 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=150' : 
                type === 'lagarta' ? 'https://images.unsplash.com/photo-1574390353491-9270f3709b3f?auto=format&fit=crop&q=80&w=150' : 
                'https://images.unsplash.com/photo-1576082933860-2443d51786f1?auto=format&fit=crop&q=80&w=150'
            }"/>
            <div class="pest-scan-beam"></div>
        </div>
        <p class="text-[10px] text-primary font-bold animate-pulse uppercase flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">sync</span>
            ${currentLanguage === 'pt-BR' ? 'AgriIA analisando fitossanidade foliar...' : 'AgriIA analizando fitosanidad foliar...'}
        </p>
    `;
    
    addMessageToChat('', false, uploadHtml);
    
    // Trigger Scanning Diagnosis delay
    setTimeout(() => {
        // Renders complete Diagnostic response with Quick action treat button
        let diagnosticName = '';
        let severity = 'Média';
        let dangerColor = 'text-yellow-600';
        let chemicalRec = '';
        let chemicalRecId = 'pest-1';
        let description = '';
        
        if (type === 'ferrugem') {
            diagnosticName = currentLanguage === 'pt-BR' ? 'Ferrugem Asiática da Soja' : 'Roya Asiática de la Soja';
            severity = currentLanguage === 'pt-BR' ? 'ALTA (CRÍTICO)' : 'ALTA (CRÍTICO)';
            dangerColor = 'text-red-600 font-bold';
            chemicalRec = 'Tebuconazole 250 EC';
            chemicalRecId = 'pest-1';
            description = currentLanguage === 'pt-BR' 
                ? 'Fungo fitopatógeno detectado em estágio reprodutivo. Lesões amarelas observadas.' 
                : 'Hongo fitopatógeno detectado en etapa reproductiva. Lesiones amarillentas observadas.';
        } else if (type === 'lagarta') {
            diagnosticName = currentLanguage === 'pt-BR' ? 'Lagarta-do-Cartucho (Spodoptera)' : 'Oruga Cogollera (Spodoptera)';
            severity = currentLanguage === 'pt-BR' ? 'ALTA' : 'ALTA';
            dangerColor = 'text-red-600 font-bold';
            chemicalRec = 'Engeo Pleno';
            chemicalRecId = 'pest-3';
            description = currentLanguage === 'pt-BR' 
                ? 'Alta taxa de desfolha por lagartas nas folhas do baixeiro.' 
                : 'Alta tasa de defoliación por orugas en las hojas inferiores.';
        } else {
            diagnosticName = currentLanguage === 'pt-BR' ? 'Percevejo-Marrão da Soja' : 'Chinche Marrón de la Soja';
            severity = currentLanguage === 'pt-BR' ? 'MÉDIA' : 'MEDIANA';
            dangerColor = 'text-yellow-600 font-bold';
            chemicalRec = 'Engeo Pleno';
            chemicalRecId = 'pest-3';
            description = currentLanguage === 'pt-BR' 
                ? 'Presença de ninfas e adultos danificando vagens em formação.' 
                : 'Presencia de ninfas y adultos dañando vainas en desarrollo.';
        }
        
        const diagnosticHtml = `
            <div class="flex flex-col gap-2">
                <h5 class="font-bold text-xs text-primary flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px]">biotech</span>
                    ${currentLanguage === 'pt-BR' ? 'Diagnóstico Fitossanitário' : 'Diagnóstico Fitosanitario'}
                </h5>
                <p>⚠️ **Praga:** ${diagnosticName}</p>
                <p>📊 **Nível de Infestação:** <span class="${dangerColor}">${severity}</span></p>
                <p>📜 **Laudo:** ${description}</p>
                <p>💊 **Tratamento:** Aplicar **${chemicalRec}** urgente.</p>
                
                <!-- Direct Action register button -->
                <button class="btn btn-primary btn-sm py-2 px-3 mt-2 flex items-center justify-center gap-1.5" onclick="applyTreatmentFromScan('plot-1', '${chemicalRecId}', 25)">
                    <span class="material-symbols-outlined text-[14px]">science</span>
                    <span>${translations[currentLanguage].btn_treat_now} (Talhão 1)</span>
                </button>
            </div>
        `;
        
        addMessageToChat('', false, diagnosticHtml);
        speakResponseText(currentLanguage === 'pt-BR' ? `Diagnóstico concluído. Encontrei ${diagnosticName} com gravidade ${severity}.` : `Diagnóstico concluido. Encontré ${diagnosticName} con gravedad ${severity}.`);
    }, 2500);
}

function handlePestPhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Trigger simulated diagnosis based on a random sample
        const samples = ['ferrugem', 'lagarta', 'percevejo'];
        const randomType = samples[Math.floor(Math.random() * samples.length)];
        selectPestSample(randomType);
    }
}

function applyTreatmentFromScan(plotId, pesticideId, amount) {
    registerPesticideApplicationDirect(plotId, pesticideId, amount);
    
    // Log the financial cost of this quick treatment!
    const pest = db.pesticides.find(p => p.id === pesticideId);
    const cost = amount * 12; // simulated cost
    const date = new Date().toISOString().split('T')[0];
    const txId = 'tx-' + (db.transactions.length + 1);
    
    db.transactions.unshift({ 
        id: txId, 
        date, 
        type: 'gasto', 
        description: `Tratamento AgriIA: ${pest.name} no Talhão 1`, 
        amount: cost, 
        currency: 'USD', 
        category: 'Insumos', 
        plot_id: plotId 
    });
    
    saveDatabaseLocally();
    renderFinancialView();
    renderDashboard();
    
    // Renders success inside chat bubbles too!
    const successMsg = currentLanguage === 'pt-BR'
        ? `✅ **Defensivo Aplicado!** Descontado **${amount} Litros** de ${pest.name} do estoque e lançado despesa de **$ ${cost.toFixed(2)} USD**.`
        : `✅ **¡Defensivo Aplicado!** Descontado **${amount} Litros** de ${pest.name} del stock e ingresado gasto de **$ ${cost.toFixed(2)} USD**.`;
        
    addMessageToChat(successMsg);
    speakResponseText(currentLanguage === 'pt-BR' ? 'Tratamento executado e estoque atualizado com sucesso!' : '¡Tratamiento ejecutado y stock actualizado con éxito!');
}

// ==================== 13. UI COMPONENT TOASTS ====================
function showToast(message, isError = false) {
    const existing = document.querySelector('.app-toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `app-toast fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl border z-[90] flex items-center gap-2 duration-300 ${
        isError 
            ? 'bg-error-container text-on-error-container border-error' 
            : 'bg-primary-container text-on-primary-container border-primary'
    }`;
    
    const icon = isError ? 'error' : 'check_circle';
    toast.innerHTML = `
        <span class="material-symbols-outlined text-[18px]">${icon}</span>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Expose functions to global window scope to bypass module encapsulation for HTML event handlers
window.selectPresetAvatar = selectPresetAvatar;
window.handleProfileAvatarUpload = handleProfileAvatarUpload;
window.saveUserProfile = saveUserProfile;
window.resetLocalDatabase = resetLocalDatabase;
window.toggleLayoutModeOffline = toggleLayoutModeOffline;
window.setCurrencyDisplayFilter = setCurrencyDisplayFilter;
window.saveExchangeRates = saveExchangeRates;
window.updateExchangeRatesRealTime = updateExchangeRatesRealTime;
window.setLanguage = setLanguage;
window.toggleTheme = toggleTheme;
window.switchTab = switchTab;
window.switchSubTab = switchSubTab;
window.toggleSidebarMobile = toggleSidebarMobile;
window.acceptGPSPermission = acceptGPSPermission;
window.denyGPSPermission = denyGPSPermission;
window.requestGPSAndRealWeather = requestGPSAndRealWeather;
window.convertFrom = convertFrom;
window.toggleAuthMode = toggleAuthMode;
window.handleAuthSubmit = handleAuthSubmit;
window.saveSupabaseSettings = saveSupabaseSettings;
window.disconnectSupabase = disconnectSupabase;
window.loginDemoMode = loginDemoMode;
window.loginWithOAuth = loginWithOAuth;
window.handleLogout = handleLogout;
window.toggleAuthSupabaseDrawer = toggleAuthSupabaseDrawer;
window.saveAuthSupabaseSettings = saveAuthSupabaseSettings;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeAllModals = closeAllModals;
window.handleFormSubmitPlot = handleFormSubmitPlot;
window.handleFormSubmitMachinery = handleFormSubmitMachinery;
window.handleFormSubmitStaff = handleFormSubmitStaff;
window.handleFormSubmitFuel = handleFormSubmitFuel;
window.handleFormSubmitPesticideStock = handleFormSubmitPesticideStock;
window.handleFormSubmitPesticideApply = handleFormSubmitPesticideApply;
window.handleFormSubmitFinance = handleFormSubmitFinance;
window.deleteMachineryItem = deleteMachineryItem;
window.deleteStaffItem = deleteStaffItem;
window.deleteApplication = deleteApplication;
window.deleteTransaction = deleteTransaction;
window.calculatePlotUnits = calculatePlotUnits;
window.setFinanceType = setFinanceType;
window.toggleFinanceInsumoFields = toggleFinanceInsumoFields;
window.togglePesticideRegisterDueDate = togglePesticideRegisterDueDate;

function getSeedGrainStock(productId) {
    if (!db.seedsGrainsMovements) return 0;
    const entries = db.seedsGrainsMovements.filter(m => m.product_id === productId && m.type === 'entrada');
    const exits = db.seedsGrainsMovements.filter(m => m.product_id === productId && m.type === 'saida');
    const totalIn = entries.reduce((sum, m) => sum + (parseFloat(m.quantity) || 0), 0);
    const totalOut = exits.reduce((sum, m) => sum + (parseFloat(m.quantity) || 0), 0);
    return Math.max(0, totalIn - totalOut);
}

function getFuelStock(fuelId) {
    if (!db.fuelMovements) return 0;
    const entries = db.fuelMovements.filter(m => m.fuel_id === fuelId && m.type === 'entrada');
    const exits = db.fuelMovements.filter(m => m.fuel_id === fuelId && m.type === 'saida');
    const totalIn = entries.reduce((sum, m) => sum + (parseFloat(m.quantity) || 0), 0);
    const totalOut = exits.reduce((sum, m) => sum + (parseFloat(m.quantity) || 0), 0);
    return Math.max(0, totalIn - totalOut);
}

function addLegacySeedGrainEntry(item) {
    if (!db.seedsGrains) db.seedsGrains = [];
    db.seedsGrains.unshift(item);
    
    if (!db.seedsGrainsProducts) db.seedsGrainsProducts = [];
    if (!db.seedsGrainsMovements) db.seedsGrainsMovements = [];
    
    const cat = item.type === 'Grão Colhido' ? 'Grão' : 'Semente';
    let prod = db.seedsGrainsProducts.find(p => p.name === item.name && p.category === cat);
    if (!prod) {
        prod = {
            id: 'sg-prod-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
            name: item.name,
            category: cat,
            unit: item.unit || 'Sacas'
        };
        db.seedsGrainsProducts.push(prod);
    }
    
    let subType = 'compra';
    if (item.type === 'Semente Tratada') subType = 'tratamento';
    if (item.type === 'Grão Colhido') subType = 'colheita';
    
    db.seedsGrainsMovements.push({
        id: item.id,
        product_id: prod.id,
        type: 'entrada',
        sub_type: subType,
        date: item.date,
        quantity: parseFloat(item.quantity) || 0,
        unit_price: item.quantity > 0 ? (item.cost / item.quantity) : 0,
        total_cost: item.cost || 0,
        currency: item.currency || 'BRL',
        payment_type: 'À vista',
        payment_date: item.date,
        safra_id: item.safra_id || 'safra-1',
        plot_id: item.plot_id || '',
        description: item.type + ': ' + item.name
    });
}

function addLegacyFuelLogEntry(item) {
    if (!db.fuelLogs) db.fuelLogs = [];
    db.fuelLogs.unshift(item);
    
    if (!db.fuels) db.fuels = [];
    if (!db.fuelMovements) db.fuelMovements = [];
    
    if (db.fuels.length === 0) {
        db.fuels.push({
            id: 'fuel-diesel-s10',
            name: currentLanguage === 'pt-BR' ? 'Diesel S10' : 'Gasoil S10',
            capacity: 5000
        });
    }
    
    const isEntry = item.cost_value > 0 || item.desc.toLowerCase().includes('reabastecimento') || item.desc.toLowerCase().includes('carga') || item.desc.toLowerCase().includes('compra');
    
    db.fuelMovements.push({
        id: item.id,
        fuel_id: 'fuel-diesel-s10',
        type: isEntry ? 'entrada' : 'saida',
        date: item.date,
        quantity: parseFloat(item.amount_liters) || 0,
        unit_price: item.amount_liters > 0 ? (item.cost_value / item.amount_liters) : 0,
        total_cost: item.cost_value || 0,
        currency: item.currency || 'BRL',
        payment_type: 'À vista',
        payment_date: item.date,
        machinery_id: item.mach_id || '',
        description: item.desc
    });
}

function onSeedGrainProductChange() {
    const productId = document.getElementById('seed-grain-product').value;
    const prod = db.seedsGrainsProducts.find(p => p.id === productId);
    if (!prod) return;

    const unitInput = document.getElementById('seed-grain-unit');
    if (unitInput) {
        unitInput.value = prod.unit || 'Sacas';
        unitInput.dispatchEvent(new Event('change'));
    }

    const typeSelect = document.getElementById('seed-grain-type');
    if (typeSelect) {
        typeSelect.innerHTML = '';
        if (prod.category === 'Semente') {
            typeSelect.innerHTML = `
                <option value="compra">${currentLanguage === 'pt-BR' ? 'Compra (Entrada)' : 'Compra (Entrada)'}</option>
                <option value="tratamento">${currentLanguage === 'pt-BR' ? 'Tratamento (Entrada)' : 'Tratamiento (Entrada)'}</option>
                <option value="plantio">${currentLanguage === 'pt-BR' ? 'Plantio (Saída)' : 'Plantación (Salida)'}</option>
            `;
        } else {
            typeSelect.innerHTML = `
                <option value="colheita">${currentLanguage === 'pt-BR' ? 'Colheita (Entrada)' : 'Cosecha (Entrada)'}</option>
                <option value="venda">${currentLanguage === 'pt-BR' ? 'Venda (Saída)' : 'Venta (Salida)'}</option>
            `;
        }
    }
    toggleSeedGrainOpFields();
    const costTypeSelect = document.getElementById('seed-grain-cost-type');
    if (costTypeSelect) {
        costTypeSelect.dispatchEvent(new Event('change'));
    }
}

function toggleSeedGrainOpFields() {
    const opType = document.getElementById('seed-grain-type').value;
    
    const plotGroup = document.getElementById('seed-grain-plot-group');
    const financialFields = document.getElementById('seed-grain-financial-fields');
    const autoTxGroup = document.getElementById('seed-grain-auto-tx-group');
    const costLabel = document.getElementById('seed-grain-cost-label');
    
    if (plotGroup) plotGroup.classList.add('hidden');
    if (financialFields) financialFields.classList.add('hidden');
    if (autoTxGroup) autoTxGroup.classList.add('hidden');
    
    if (opType === 'plantio') {
        if (plotGroup) plotGroup.classList.remove('hidden');
    } else if (opType === 'compra') {
        if (financialFields) financialFields.classList.remove('hidden');
        if (autoTxGroup) autoTxGroup.classList.remove('hidden');
        if (costLabel) costLabel.textContent = currentLanguage === 'pt-BR' ? 'Custo Total da Compra' : 'Costo Total de Compra';
    } else if (opType === 'venda') {
        if (financialFields) financialFields.classList.remove('hidden');
        if (autoTxGroup) autoTxGroup.classList.remove('hidden');
        if (costLabel) costLabel.textContent = currentLanguage === 'pt-BR' ? 'Valor Total da Venda' : 'Valor Total de Venta';
    } else if (opType === 'colheita') {
        if (plotGroup) plotGroup.classList.remove('hidden');
    }
    
    toggleSeedGrainDueDate();
}

function toggleSeedGrainDueDate() {
    const payType = document.getElementById('seed-grain-payment-type').value;
    const wrapper = document.getElementById('seed-grain-due-date-wrapper');
    if (wrapper) {
        if (payType === 'A prazo') {
            wrapper.classList.remove('hidden');
        } else {
            wrapper.classList.add('hidden');
        }
    }
}

function handleFormSubmitSeedGrainProduct(e) {
    e.preventDefault();
    const name = document.getElementById('sg-prod-name').value;
    const category = document.getElementById('sg-prod-category').value;
    const unit = document.getElementById('sg-prod-unit').value;
    
    if (name && category && unit) {
        const exists = db.seedsGrainsProducts.some(p => p.name.toLowerCase() === name.toLowerCase() && p.category === category);
        if (exists) {
            showToast(currentLanguage === 'pt-BR' ? 'Produto já cadastrado nesta categoria!' : '¡Producto ya registrado en esta categoría!');
            return;
        }
        
        const id = 'sg-prod-' + Date.now();
        db.seedsGrainsProducts.push({ id, name, category, unit });
        
        saveDatabaseLocally();
        closeModal('modal-add-semente-grao-produto');
        populateSelectDropdowns();
        renderSeedsGrains();
        showToast(currentLanguage === 'pt-BR' ? 'Produto cadastrado com sucesso!' : '¡Producto registrado con éxito!');
        e.target.reset();
    }
}

function deleteSeedGrainProduct(id) {
    const hasMovements = db.seedsGrainsMovements && db.seedsGrainsMovements.some(m => m.product_id === id);
    if (hasMovements) {
        showToast(currentLanguage === 'pt-BR' ? 'Não é possível excluir um produto que possui movimentações no estoque!' : '¡No se puede eliminar un producto con movimientos en stock!');
        return;
    }
    
    if (confirm(currentLanguage === 'pt-BR' ? 'Tem certeza que deseja remover este produto do catálogo?' : '¿Está seguro de que deseja eliminar este produto del catálogo?')) {
        db.seedsGrainsProducts = db.seedsGrainsProducts.filter(p => p.id !== id);
        saveDatabaseLocally();
        populateSelectDropdowns();
        renderSeedsGrains();
        showToast(currentLanguage === 'pt-BR' ? 'Produto excluído!' : '¡Produto excluído!');
    }
}

function handleFormSubmitFuelProduct(e) {
    e.preventDefault();
    const name = document.getElementById('fuel-prod-name').value;
    const capacity = parseFloat(document.getElementById('fuel-prod-capacity').value) || 5000;
    
    if (name && capacity > 0) {
        const exists = db.fuels.some(f => f.name.toLowerCase() === name.toLowerCase());
        if (exists) {
            showToast(currentLanguage === 'pt-BR' ? 'Combustível já cadastrado!' : '¡Combustible ya registrado!');
            return;
        }
        
        const id = 'fuel-prod-' + Date.now();
        db.fuels.push({ id, name, capacity });
        
        saveDatabaseLocally();
        closeModal('modal-add-combustivel-produto');
        populateSelectDropdowns();
        renderRecursosView();
        renderInventarioView();
        showToast(currentLanguage === 'pt-BR' ? 'Combustível cadastrado com sucesso!' : '¡Combustible registrado con éxito!');
        e.target.reset();
    }
}

function deleteFuelProduct(id) {
    const hasMovements = db.fuelMovements && db.fuelMovements.some(m => m.fuel_id === id);
    if (hasMovements) {
        showToast(currentLanguage === 'pt-BR' ? 'Não é possível excluir um combustível que possui movimentações!' : '¡No se puede eliminar un combustible con movimientos!');
        return;
    }
    
    if (db.fuels.length <= 1) {
        showToast(currentLanguage === 'pt-BR' ? 'Você deve manter pelo menos um combustível cadastrado!' : '¡Debe mantener al menos un combustible registrado!');
        return;
    }
    
    if (confirm(currentLanguage === 'pt-BR' ? 'Tem certeza que deseja remover este combustível?' : '¿Está seguro de que deseja eliminar este combustible?')) {
        db.fuels = db.fuels.filter(f => f.id !== id);
        saveDatabaseLocally();
        populateSelectDropdowns();
        renderRecursosView();
        renderInventarioView();
        showToast(currentLanguage === 'pt-BR' ? 'Combustível removido!' : '¡Combustible eliminado!');
    }
}

function updateFuelGauge() {
    const select = document.getElementById('fuel-gauge-product-select');
    if (!select) return;
    const fuelId = select.value;
    const fuel = db.fuels.find(f => f.id === fuelId);
    if (!fuel) return;
    
    const stock = getFuelStock(fuelId);
    const cap = fuel.capacity || 5000;
    const pct = Math.round((stock / cap) * 100);
    
    const countEl = document.getElementById('fuel-tank-liters-count');
    const pctEl = document.getElementById('fuel-tank-percent-gauge');
    const circleGauge = document.getElementById('fuel-tank-circle-gauge');
    
    if (countEl) countEl.textContent = `${stock.toLocaleString()}L`;
    if (pctEl) pctEl.textContent = `${pct}%`;
    
    if (circleGauge) {
        const dashOffset = 377 - (377 * Math.min(100, pct)) / 100;
        circleGauge.setAttribute('stroke-dashoffset', dashOffset);
    }
}

function toggleFuelOpFields() {
    const machId = document.getElementById('fuel-machinery').value;
    const group = document.getElementById('fuel-purchase-financial-group');
    if (group) {
        if (machId) {
            group.classList.add('hidden');
        } else {
            group.classList.remove('hidden');
        }
    }
    toggleFuelDueDate();
}

function toggleFuelDueDate() {
    const payType = document.getElementById('fuel-payment-type').value;
    const wrapper = document.getElementById('fuel-due-date-wrapper');
    const machId = document.getElementById('fuel-machinery').value;
    if (wrapper) {
        if (payType === 'A prazo' && !machId) {
            wrapper.classList.remove('hidden');
        } else {
            wrapper.classList.add('hidden');
        }
    }
}

function renderSeedsGrainsCatalog() {
    const tbody = document.getElementById('seeds-grains-catalog-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    if (!db.seedsGrainsProducts || db.seedsGrainsProducts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-on-surface-variant opacity-60">${translations[currentLanguage].inv_no_data}</td></tr>`;
        return;
    }
    
    db.seedsGrainsProducts.forEach(p => {
        const stock = getSeedGrainStock(p.id);
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-surface-container-low transition-colors';
        
        const catBadge = p.category === 'Semente'
            ? `<span class="bg-primary-container text-on-primary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${translations[currentLanguage].type_seed_bought || 'Semente'}</span>`
            : `<span class="bg-secondary-container text-on-secondary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${translations[currentLanguage].type_grain_harvested || 'Grão'}</span>`;
            
        tr.innerHTML = `
            <td class="p-4 font-bold text-on-surface">${p.name}</td>
            <td class="p-4">${catBadge}</td>
            <td class="p-4 text-on-surface-variant font-semibold">${p.unit}</td>
            <td class="p-4 text-right font-data-numeral font-bold text-primary">${stock.toLocaleString()} ${p.unit}</td>
            <td class="p-4 text-center">
                <button class="text-on-surface-variant hover:text-error transition-colors" onclick="deleteSeedGrainProduct('${p.id}')" title="Excluir do Catálogo">
                    <span class="material-symbols-outlined text-[18px]">delete</span>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderSeedsGrains() {
    const t = translations[currentLanguage];
    
    // 1. Render in Inventário table
    const invTbody = document.getElementById('inv-seeds-grains-tbody');
    if (invTbody) {
        invTbody.innerHTML = '';
        if (!db.seedsGrainsMovements || db.seedsGrainsMovements.length === 0) {
            invTbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            const sorted = [...db.seedsGrainsMovements].sort((a, b) => new Date(b.date) - new Date(a.date));
            sorted.forEach(m => {
                const prod = db.seedsGrainsProducts.find(p => p.id === m.product_id);
                if (!prod) return;
                
                const d = new Date(m.date + 'T00:00:00');
                const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                const safra = db.safras.find(s => s.id === m.safra_id);
                const safraName = safra ? safra.name : m.safra_id;
                const costStr = m.total_cost > 0 ? formatCurrency(m.total_cost, m.currency) : '-';
                
                let typeBadge = '';
                if (m.type === 'entrada') {
                    if (m.sub_type === 'compra') {
                        typeBadge = `<span class="bg-primary-container text-on-primary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_seed_bought || 'Compra'}</span>`;
                    } else if (m.sub_type === 'tratamento') {
                        typeBadge = `<span class="bg-tertiary-container text-on-tertiary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_seed_treated || 'Tratamento'}</span>`;
                    } else {
                        typeBadge = `<span class="bg-secondary-container text-on-secondary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_grain_harvested || 'Colheita'}</span>`;
                    }
                } else {
                    if (m.sub_type === 'plantio') {
                        typeBadge = `<span class="bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300/30 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Plantio</span>`;
                    } else {
                        typeBadge = `<span class="bg-green-100 dark:bg-green-950/40 text-green-800 dark:text-green-300 border border-green-300/30 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Venda</span>`;
                    }
                }
                
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
                    <td class="p-4">${typeBadge}</td>
                    <td class="p-4 font-bold text-on-surface">${prod.name}</td>
                    <td class="p-4 font-data-numeral text-primary font-bold">${m.quantity.toLocaleString()} ${prod.unit}</td>
                    <td class="p-4 text-on-surface-variant">${safraName}</td>
                    <td class="p-4 font-data-numeral text-right font-bold text-on-surface">${costStr}</td>
                `;
                invTbody.appendChild(tr);
            });
        }
    }
    
    // 2. Render in dedicated Grãos & Sementes table
    const gsTbody = document.getElementById('seeds-grains-table-body');
    let boughtSum = 0;
    let treatedSum = 0;
    let harvestedSum = 0;

    if (db.seedsGrainsMovements) {
        db.seedsGrainsMovements.forEach(m => {
            const qty = parseFloat(m.quantity) || 0;
            if (m.sub_type === 'compra') {
                boughtSum += qty;
            } else if (m.sub_type === 'tratamento') {
                treatedSum += qty;
            } else if (m.sub_type === 'colheita') {
                harvestedSum += qty;
            }
        });
    }

    // Update KPIs
    const kpiBought = document.getElementById('gs-kpi-seeds-bought');
    const kpiTreated = document.getElementById('gs-kpi-seeds-treated');
    const kpiHarvested = document.getElementById('gs-kpi-grains-harvested');
    if (kpiBought) kpiBought.textContent = `${boughtSum.toLocaleString()} sc`;
    if (kpiTreated) kpiTreated.textContent = `${treatedSum.toLocaleString()} sc`;
    if (kpiHarvested) kpiHarvested.textContent = `${harvestedSum.toLocaleString()} sc`;

    if (gsTbody) {
        gsTbody.innerHTML = '';
        if (!db.seedsGrainsMovements || db.seedsGrainsMovements.length === 0) {
            gsTbody.innerHTML = `<tr><td colspan="7" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            const sorted = [...db.seedsGrainsMovements].sort((a, b) => new Date(b.date) - new Date(a.date));
            sorted.forEach(m => {
                const prod = db.seedsGrainsProducts.find(p => p.id === m.product_id);
                if (!prod) return;
                
                const d = new Date(m.date + 'T00:00:00');
                const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                const safra = db.safras.find(s => s.id === m.safra_id);
                const safraName = safra ? safra.name : m.safra_id;
                const costStr = m.total_cost > 0 ? formatCurrency(m.total_cost, m.currency) : '-';
                
                let typeBadge = '';
                if (m.type === 'entrada') {
                    if (m.sub_type === 'compra') {
                        typeBadge = `<span class="bg-primary-container text-on-primary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_seed_bought || 'Compra'}</span>`;
                    } else if (m.sub_type === 'tratamento') {
                        typeBadge = `<span class="bg-tertiary-container text-on-tertiary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_seed_treated || 'Tratamento'}</span>`;
                    } else {
                        typeBadge = `<span class="bg-secondary-container text-on-secondary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_grain_harvested || 'Colheita'}</span>`;
                    }
                } else {
                    if (m.sub_type === 'plantio') {
                        typeBadge = `<span class="bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300/30 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Plantio</span>`;
                    } else {
                        typeBadge = `<span class="bg-green-100 dark:bg-green-950/40 text-green-800 dark:text-green-300 border border-green-300/30 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Venda</span>`;
                    }
                }
                
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
                    <td class="p-4">${typeBadge}</td>
                    <td class="p-4 font-bold text-on-surface">${prod.name}</td>
                    <td class="p-4 font-data-numeral text-primary font-bold">${m.quantity.toLocaleString()} ${prod.unit}</td>
                    <td class="p-4 text-on-surface-variant">${safraName}</td>
                    <td class="p-4 font-data-numeral text-right font-bold text-on-surface">${costStr}</td>
                    <td class="p-4 text-center">
                        <button class="text-on-surface-variant hover:text-error transition-colors" onclick="deleteSeedGrainItem('${m.id}')" title="Excluir">
                            <span class="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                    </td>
                `;
                gsTbody.appendChild(tr);
            });
        }
    }

    // 3. Render in Catalog sub-tab
    renderSeedsGrainsCatalog();

    // 4. Render type distribution progress bars
    const typeContainer = document.getElementById('gs-type-distribution');
    if (typeContainer) {
        typeContainer.innerHTML = '';
        const totalQty = boughtSum + treatedSum + harvestedSum;
        if (totalQty === 0) {
            typeContainer.innerHTML = `<p class="text-xs text-on-surface-variant opacity-60 text-center py-4">Sem dados para exibir</p>`;
        } else {
            const types = [
                { name: currentLanguage === 'pt-BR' ? 'Sementes Compradas' : 'Semillas Compradas', qty: boughtSum, color: 'bg-primary', icon: 'shopping_cart', textColor: 'text-primary' },
                { name: currentLanguage === 'pt-BR' ? 'Sementes Tratadas' : 'Semillas Tratadas', qty: treatedSum, color: 'bg-tertiary', icon: 'science', textColor: 'text-tertiary' },
                { name: currentLanguage === 'pt-BR' ? 'Grãos Colhidos' : 'Granos Cosechados', qty: harvestedSum, color: 'bg-secondary', icon: 'agriculture', textColor: 'text-secondary' }
            ].sort((a, b) => b.qty - a.qty);

            types.forEach(t => {
                const pct = (t.qty / totalQty) * 100;
                const row = document.createElement('div');
                row.className = 'flex flex-col gap-1.5';
                row.innerHTML = `
                    <div class="flex justify-between items-center text-xs">
                        <span class="flex items-center gap-1.5 font-bold text-on-surface">
                           <span class="material-symbols-outlined text-[16px] ${t.textColor}">${t.icon}</span>
                           <span>${t.name}</span>
                        </span>
                        <span class="font-data-numeral font-bold text-on-surface-variant">
                            ${t.qty.toLocaleString()} sc <span class="text-[10px] opacity-70 font-semibold">(${pct.toFixed(0)}%)</span>
                        </span>
                    </div>
                    <div class="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                        <div class="h-full rounded-full ${t.color} transition-all duration-1000 ease-out" style="width: 0%" id="bar-gs-type-${t.icon}"></div>
                    </div>
                `;
                typeContainer.appendChild(row);
                setTimeout(() => {
                    const bar = document.getElementById(`bar-gs-type-${t.icon}`);
                    if (bar) bar.style.width = `${pct}%`;
                }, 100);
            });
        }
    }

    // 5. Render product distribution progress bars (top 5)
    const productContainer = document.getElementById('gs-product-distribution');
    if (productContainer) {
        productContainer.innerHTML = '';
        const prodTotals = {};
        let totalProdQty = 0;
        if (db.seedsGrainsMovements) {
            db.seedsGrainsMovements.forEach(m => {
                const prod = db.seedsGrainsProducts.find(p => p.id === m.product_id);
                if (prod && m.type === 'entrada') {
                    const qty = parseFloat(m.quantity) || 0;
                    prodTotals[prod.name] = (prodTotals[prod.name] || 0) + qty;
                    totalProdQty += qty;
                }
            });
        }

        if (totalProdQty === 0) {
            productContainer.innerHTML = `<p class="text-xs text-on-surface-variant opacity-60 text-center py-4">Sem dados para exibir</p>`;
        } else {
            const sortedProds = Object.keys(prodTotals).map(name => {
                return { name, qty: prodTotals[name], pct: (prodTotals[name] / totalProdQty) * 100 };
            }).sort((a, b) => b.qty - a.qty).slice(0, 5);

            sortedProds.forEach((p, idx) => {
                const row = document.createElement('div');
                row.className = 'flex flex-col gap-1.5';
                const colors = ['bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-amber-500', 'bg-blue-500'];
                const color = colors[idx % colors.length];
                row.innerHTML = `
                    <div class="flex justify-between items-center text-xs">
                        <span class="flex items-center gap-1.5 font-bold text-on-surface">
                            <span class="material-symbols-outlined text-[16px] text-primary">grain</span>
                            <span>${p.name}</span>
                        </span>
                        <span class="font-data-numeral font-bold text-on-surface-variant">
                            ${p.qty.toLocaleString()} sc <span class="text-[10px] opacity-70 font-semibold">(${p.pct.toFixed(0)}%)</span>
                        </span>
                    </div>
                    <div class="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                        <div class="h-full rounded-full ${color} transition-all duration-1000 ease-out" style="width: 0%" id="bar-gs-prod-${idx}"></div>
                    </div>
                `;
                productContainer.appendChild(row);
                setTimeout(() => {
                    const bar = document.getElementById(`bar-gs-prod-${idx}`);
                    if (bar) bar.style.width = `${p.pct}%`;
                }, 100);
            });
        }
    }
}

function handleFormSubmitSeedGrain(e) {
    e.preventDefault();
    const productId = document.getElementById('seed-grain-product').value;
    const opType = document.getElementById('seed-grain-type').value;
    const qty = parseFloat(document.getElementById('seed-grain-qty').value);
    const unit = document.getElementById('seed-grain-unit').value;
    const safraId = document.getElementById('seed-grain-safra').value;
    const date = document.getElementById('seed-grain-date').value || new Date().toISOString().split('T')[0];
    
    const prod = db.seedsGrainsProducts.find(p => p.id === productId);
    if (!prod || !qty || qty <= 0) return;
    
    const isOutflow = (opType === 'plantio' || opType === 'venda');
    if (isOutflow) {
        const currentStock = getSeedGrainStock(productId);
        if (qty > currentStock) {
            showToast(currentLanguage === 'pt-BR' 
                ? `Estoque insuficiente! Estoque atual: ${currentStock.toLocaleString()} ${unit}` 
                : `¡Stock insuficiente! Stock actual: ${currentStock.toLocaleString()} ${unit}`);
            return;
        }
    }
    
    const id = 'sg-mov-' + Date.now();
    const plotId = document.getElementById('seed-grain-plot').value || '';
    
    let cost = 0;
    let currency = 'BRL';
    let paymentType = 'À vista';
    let dueDate = '';
    let autoTx = false;
    
    if (opType === 'compra' || opType === 'venda') {
        cost = parseFloat(document.getElementById('seed-grain-cost').value) || 0;
        currency = document.getElementById('seed-grain-currency').value;
        paymentType = document.getElementById('seed-grain-payment-type').value;
        dueDate = paymentType === 'A prazo' ? document.getElementById('seed-grain-due-date').value : '';
        autoTx = document.getElementById('seed-grain-auto-tx').checked;
    }
    
    db.seedsGrainsMovements.push({
        id,
        product_id: productId,
        type: isOutflow ? 'saida' : 'entrada',
        sub_type: opType,
        date,
        quantity: qty,
        unit_price: cost > 0 ? (cost / qty) : 0,
        total_cost: cost,
        currency,
        payment_type: paymentType,
        payment_date: paymentType === 'A prazo' ? dueDate : date,
        safra_id: safraId,
        plot_id: plotId,
        description: `${prod.name} (${opType})`
    });

    // Write to legacy table for backwards compatibility
    let legacyType = 'Semente Comprada';
    if (opType === 'tratamento') legacyType = 'Semente Tratada';
    if (opType === 'colheita') legacyType = 'Grão Colhido';
    if (opType === 'plantio') legacyType = 'Semente Aplicada';
    if (opType === 'venda') legacyType = 'Grão Vendido';

    db.seedsGrains.unshift({
        id,
        type: legacyType,
        name: prod.name,
        quantity: qty,
        unit: prod.unit,
        safra_id: safraId,
        cost: cost,
        currency: currency,
        date: date
    });
    
    if (autoTx && cost > 0) {
        const txId = 'tx-' + Date.now();
        const safra = db.safras.find(s => s.id === safraId);
        const safraName = safra ? safra.name : '';
        const txType = opType === 'compra' ? 'gasto' : 'receita';
        const category = opType === 'compra' ? 'Insumos' : 'Colheita';
        
        let desc = opType === 'compra'
            ? `${currentLanguage === 'pt-BR' ? 'Compra Sementes' : 'Compra Semillas'}: ${prod.name} (${qty} ${unit}) - ${safraName}`
            : `${currentLanguage === 'pt-BR' ? 'Venda de Grãos' : 'Venta de Granos'}: ${prod.name} (${qty} ${unit}) - ${safraName}`;
            
        db.transactions.unshift({
            id: txId,
            date,
            description: desc,
            category,
            type: txType,
            amount: cost,
            currency,
            plot_id: plotId,
            movement_id: id,
            payment_status: paymentType === 'A prazo' ? 'pendente' : 'pago',
            due_date: paymentType === 'A prazo' ? dueDate : ''
        });
    }
    
    saveDatabaseLocally();
    closeModal('modal-add-semente-grao');
    renderSeedsGrains();
    renderInventarioView();
    renderFinancialView();
    renderDashboard();
    
    showToast(currentLanguage === 'pt-BR' ? 'Movimentação registrada com sucesso!' : '¡Movimiento registrado con éxito!');
    e.target.reset();
}

function deleteSeedGrainItem(id) {
    if (confirm(currentLanguage === 'pt-BR' ? 'Tem certeza que deseja remover esta movimentação?' : '¿Está seguro de que desea eliminar este movimiento?')) {
        db.transactions = db.transactions.filter(tx => tx.movement_id !== id);
        db.seedsGrainsMovements = db.seedsGrainsMovements.filter(m => m.id !== id);
        db.seedsGrains = db.seedsGrains.filter(item => item.id !== id);
        
        saveDatabaseLocally();
        renderSeedsGrains();
        renderInventarioView();
        renderFinancialView();
        renderDashboard();
        showToast(currentLanguage === 'pt-BR' ? 'Movimentação removida!' : '¡Movimiento eliminado!');
    }
}



function renderSafrasView() {
    const t = translations[currentLanguage];
    const activeSafra = db.safras.find(s => s.status === 'Ativo');
    let activeSafraExpenses = 0;
    let activeSafraRevenues = 0;
    
    if (activeSafra) {
        const start = new Date(activeSafra.start_date + 'T00:00:00');
        const end = new Date(activeSafra.end_date + 'T23:59:59');
        db.transactions.forEach(tx => {
            const txDate = new Date(tx.date + 'T00:00:00');
            if (txDate >= start && txDate <= end) {
                const valBrl = convertValue(tx.amount, tx.currency, 'BRL');
                if (tx.type === 'receita') {
                    activeSafraRevenues += valBrl;
                } else {
                    activeSafraExpenses += valBrl;
                }
            }
        });
    }
    
    const activeDashboard = document.getElementById('safra-active-dashboard');
    if (activeDashboard) {
        if (!activeSafra) {
            activeDashboard.innerHTML = `
                <div class="bg-surface-container-low border border-outline-variant rounded-2xl p-6 text-center shadow-sm">
                    <span class="material-symbols-outlined text-4xl text-on-surface-variant/50 mb-2">calendar_today</span>
                    <p class="text-sm font-bold text-on-surface-variant">${currentLanguage === 'pt-BR' ? 'Nenhuma Safra Ativa no momento.' : 'Ninguna Zafra Activa en este momento.'}</p>
                    <p class="text-xs text-on-surface-variant/80 mt-1">${currentLanguage === 'pt-BR' ? 'Ative ou cadastre uma nova safra na lista abaixo.' : 'Active o registre una nueva zafra en la lista de abajo.'}</p>
                </div>
            `;
        } else {
            const netVal = activeSafraRevenues - activeSafraExpenses;
            const netClass = netVal >= 0 ? 'text-primary' : 'text-error';
            
            const startD = new Date(activeSafra.start_date + 'T00:00:00');
            const endD = new Date(activeSafra.end_date + 'T00:00:00');
            const startStr = startD.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
            const endStr = endD.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });

            activeDashboard.innerHTML = `
                <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-md relative overflow-hidden">
                    <div class="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none transform translate-y-1/4 translate-x-1/4">
                        <span class="material-symbols-outlined text-[200px]">calendar_today</span>
                    </div>
                    <div class="flex justify-between items-start mb-6 flex-wrap gap-4">
                        <div>
                            <span class="bg-primary/10 text-primary font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">${t.active_safra_badge}</span>
                            <h3 class="font-headline-md text-primary text-xl font-bold mt-2">${activeSafra.name}</h3>
                            <p class="text-xs text-on-surface-variant opacity-80 mt-0.5">${t.safra_period}: ${startStr} a ${endStr}</p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="bg-surface-container-low border border-outline-variant/60 p-4 rounded-xl">
                            <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${t.safra_expenses}</span>
                            <span class="font-data-numeral text-lg font-bold text-error block mt-1">${formatCurrency(activeSafraExpenses, 'BRL')}</span>
                        </div>
                        <div class="bg-surface-container-low border border-outline-variant/60 p-4 rounded-xl">
                            <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${t.safra_revenues}</span>
                            <span class="font-data-numeral text-lg font-bold text-primary block mt-1">${formatCurrency(activeSafraRevenues, 'BRL')}</span>
                        </div>
                        <div class="bg-primary-container/20 border border-primary-container p-4 rounded-xl">
                            <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${t.safra_net}</span>
                            <span class="font-data-numeral text-lg font-bold ${netClass} block mt-1">${formatCurrency(netVal, 'BRL')}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    const safrasTbody = document.getElementById('safras-table-body');
    if (safrasTbody) {
        safrasTbody.innerHTML = '';
        if (db.safras.length === 0) {
            safrasTbody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            db.safras.forEach(s => {
                const startD = new Date(s.start_date + 'T00:00:00');
                const endD = new Date(s.end_date + 'T00:00:00');
                const startStr = startD.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                const endStr = endD.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                
                const isActive = s.status === 'Ativo';
                const statusBadge = isActive
                    ? `<span class="bg-primary/10 text-primary text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.active_safra_badge}</span>`
                    : `<span class="bg-surface-container-high text-on-surface-variant text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.safra_inactive}</span>`;
                
                const activateBtn = isActive
                    ? ''
                    : `<button class="btn btn-secondary btn-xs py-1 px-2.5 text-[10px] flex items-center gap-1 font-bold" onclick="activateSafraItem('${s.id}')">
                         <span class="material-symbols-outlined text-[12px]">check</span>
                         <span>${t.btn_activate_safra}</span>
                       </button>`;
                
                const deleteBtn = isActive
                    ? ''
                    : `<button class="text-on-surface-variant hover:text-error transition-colors" onclick="deleteSafraItem('${s.id}')" title="Excluir">
                         <span class="material-symbols-outlined text-[18px]">delete</span>
                       </button>`;
                
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 font-bold text-on-surface">${s.name}</td>
                    <td class="p-4 text-on-surface-variant">${startStr} - ${endStr}</td>
                    <td class="p-4">${statusBadge}</td>
                    <td class="p-4">
                        <div class="flex justify-center items-center gap-2">
                            ${activateBtn}
                            ${deleteBtn}
                        </div>
                    </td>
                `;
                safrasTbody.appendChild(tr);
            });
        }
    }
}

function handleFormSubmitSafra(e) {
    e.preventDefault();
    const name = document.getElementById('safra-name').value;
    const start = document.getElementById('safra-start').value;
    const end = document.getElementById('safra-end').value;
    const activate = document.getElementById('safra-activate').checked;
    
    if (name && start && end) {
        const id = 'safra-' + Date.now();
        
        if (activate) {
            db.safras.forEach(s => {
                s.status = 'Inativo';
            });
        }
        
        db.safras.push({
            id,
            name,
            start_date: start,
            end_date: end,
            status: activate ? 'Ativo' : 'Inativo'
        });
        
        saveDatabaseLocally();
        closeModal('modal-add-safra');
        renderSafrasView();
        populateSelectDropdowns();
        
        const msg = currentLanguage === 'pt-BR' ? 'Safra cadastrada com sucesso!' : '¡Zafra registrada con éxito!';
        showToast(msg);
        
        e.target.reset();
    }
}

function deleteSafraItem(id) {
    const target = db.safras.find(s => s.id === id);
    if (!target) return;
    
    if (target.status === 'Ativo') {
        showToast(currentLanguage === 'pt-BR' ? 'Não é possível remover a safra ativa!' : '¡No se puede eliminar la zafra activa!', true);
        return;
    }
    
    if (confirm(currentLanguage === 'pt-BR' ? 'Deseja realmente remover esta safra?' : '¿Realmente deseja eliminar esta zafra?')) {
        db.safras = db.safras.filter(s => s.id !== id);
        saveDatabaseLocally();
        renderSafrasView();
        populateSelectDropdowns();
        showToast(currentLanguage === 'pt-BR' ? 'Safra removida!' : '¡Zafra eliminada!');
    }
}

function activateSafraItem(id) {
    db.safras.forEach(s => {
        if (s.id === id) {
            s.status = 'Ativo';
        } else {
            s.status = 'Inativo';
        }
    });
    
    saveDatabaseLocally();
    renderSafrasView();
    populateSelectDropdowns();
    showToast(currentLanguage === 'pt-BR' ? 'Safra definida como ativa!' : '¡Zafra definida como activa!');
}

window.renderSeedsGrains = renderSeedsGrains;
window.renderSafrasView = renderSafrasView;
window.handleFormSubmitSeedGrain = handleFormSubmitSeedGrain;
window.deleteSeedGrainItem = deleteSeedGrainItem;
window.handleFormSubmitSafra = handleFormSubmitSafra;
window.deleteSafraItem = deleteSafraItem;
window.activateSafraItem = activateSafraItem;

// New stock catalog / movement bindings
window.onSeedGrainProductChange = onSeedGrainProductChange;
window.toggleSeedGrainOpFields = toggleSeedGrainOpFields;
window.toggleSeedGrainDueDate = toggleSeedGrainDueDate;
window.handleFormSubmitSeedGrainProduct = handleFormSubmitSeedGrainProduct;
window.deleteSeedGrainProduct = deleteSeedGrainProduct;
window.handleFormSubmitFuelProduct = handleFormSubmitFuelProduct;
window.deleteFuelProduct = deleteFuelProduct;
window.updateFuelGauge = updateFuelGauge;
window.toggleFuelOpFields = toggleFuelOpFields;
window.toggleFuelDueDate = toggleFuelDueDate;

// Reports module bindings
window.initRelatoriosView = initRelatoriosView;
window.onReportModuleChange = onReportModuleChange;
window.setReportQuickRange = setReportQuickRange;
window.printActiveReport = printActiveReport;
window.triggerManualReportGeneration = triggerManualReportGeneration;
window.toggleReportVoiceInput = toggleReportVoiceInput;
window.executeReportAICommand = executeReportAICommand;
window.handleReportAIKey = handleReportAIKey;
window.parseAndApplyReportFilters = parseAndApplyReportFilters;

// ==================== 14. REPORTS AND ANALYTICS ENGINE ====================
let reportsInitialized = false;

function initRelatoriosView() {
    if (!reportsInitialized) {
        const startInput = document.getElementById('report-start-date');
        const endInput = document.getElementById('report-end-date');
        if (startInput && endInput) {
            startInput.value = '2026-05-01';
            endInput.value = '2026-05-31';
        }
        
        const moduleSelect = document.getElementById('report-module-select');
        if (moduleSelect) {
            moduleSelect.value = 'financeiro';
        }
        
        reportsInitialized = true;
    }
    
    onReportModuleChange();
}

function onReportModuleChange() {
    const moduleSelect = document.getElementById('report-module-select');
    if (!moduleSelect) return;
    const module = moduleSelect.value;
    
    populateReportEntitySelect(module);
    triggerManualReportGeneration();
}

function populateReportEntitySelect(module) {
    const entitySelect = document.getElementById('report-entity-select');
    if (!entitySelect) return;
    
    entitySelect.innerHTML = '';
    
    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = currentLanguage === 'pt-BR' ? 'Todos / Geral' : 'Todos / General';
    entitySelect.appendChild(optAll);
    
    if (module === 'financeiro') {
        const catGroup = document.createElement('optgroup');
        catGroup.label = currentLanguage === 'pt-BR' ? 'Categorias de Caixa' : 'Categorias de Caja';
        
        const categories = [
            { val: 'cat-gasto-Combustível', name: currentLanguage === 'pt-BR' ? 'Gasto: Combustível' : 'Egreso: Gasoil' },
            { val: 'cat-gasto-Defensivos', name: currentLanguage === 'pt-BR' ? 'Gasto: Defensivos/Insumos' : 'Egreso: Defensivos' },
            { val: 'cat-gasto-Mão de Obra', name: currentLanguage === 'pt-BR' ? 'Gasto: Colaboradores/Salários' : 'Egreso: Personal/Jornal' },
            { val: 'cat-gasto-Outras Operações', name: currentLanguage === 'pt-BR' ? 'Gasto: Outros Custos' : 'Egreso: Otras Operaciones' },
            { val: 'cat-receita-Colheita', name: currentLanguage === 'pt-BR' ? 'Receita: Venda de Grãos/Colheita' : 'Ingreso: Venta de Granos' },
            { val: 'cat-receita-Outras Operações', name: currentLanguage === 'pt-BR' ? 'Receita: Outras Entradas' : 'Ingreso: Otras Operaciones' }
        ];
        
        categories.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.val;
            opt.textContent = c.name;
            catGroup.appendChild(opt);
        });
        entitySelect.appendChild(catGroup);
        
        const plotGroup = document.createElement('optgroup');
        plotGroup.label = currentLanguage === 'pt-BR' ? 'Filtrar por Talhão' : 'Filtrar por Lote';
        db.plots.forEach(p => {
            const opt = document.createElement('option');
            opt.value = `plot-${p.id}`;
            opt.textContent = p.name;
            plotGroup.appendChild(opt);
        });
        entitySelect.appendChild(plotGroup);
        
    } else if (module === 'insumos') {
        const pestGroup = document.createElement('optgroup');
        pestGroup.label = currentLanguage === 'pt-BR' ? 'Produtos Defensivos' : 'Agroquímicos';
        db.pesticides.forEach(p => {
            const opt = document.createElement('option');
            opt.value = `pest-${p.id}`;
            opt.textContent = p.name;
            pestGroup.appendChild(opt);
        });
        entitySelect.appendChild(pestGroup);
        
        const plotGroup = document.createElement('optgroup');
        plotGroup.label = currentLanguage === 'pt-BR' ? 'Filtrar por Talhão' : 'Filtrar por Lote';
        db.plots.forEach(p => {
            const opt = document.createElement('option');
            opt.value = `plot-${p.id}`;
            opt.textContent = p.name;
            plotGroup.appendChild(opt);
        });
        entitySelect.appendChild(plotGroup);
        
    } else if (module === 'combustivel') {
        const machGroup = document.createElement('optgroup');
        machGroup.label = currentLanguage === 'pt-BR' ? 'Veículos e Frota' : 'Vehículos y Flota';
        db.machinery.forEach(m => {
            const opt = document.createElement('option');
            opt.value = `mach-${m.id}`;
            opt.textContent = `${m.name} (${m.type})`;
            machGroup.appendChild(opt);
        });
        entitySelect.appendChild(machGroup);
        
    } else if (module === 'producao') {
        const safraGroup = document.createElement('optgroup');
        safraGroup.label = currentLanguage === 'pt-BR' ? 'Safras' : 'Zafras';
        db.safras.forEach(s => {
            const opt = document.createElement('option');
            opt.value = `safra-${s.id}`;
            opt.textContent = s.name;
            safraGroup.appendChild(opt);
        });
        entitySelect.appendChild(safraGroup);
        
        const plotGroup = document.createElement('optgroup');
        plotGroup.label = currentLanguage === 'pt-BR' ? 'Filtrar por Talhão' : 'Filtrar por Lote';
        db.plots.forEach(p => {
            const opt = document.createElement('option');
            opt.value = `plot-${p.id}`;
            opt.textContent = p.name;
            plotGroup.appendChild(opt);
        });
        entitySelect.appendChild(plotGroup);
        
    } else if (module === 'cadastros') {
        const catGroup = document.createElement('optgroup');
        catGroup.label = currentLanguage === 'pt-BR' ? 'Tabelas do Sistema' : 'Tablas del Sistema';
        
        const list = [
            { val: 'plots', name: currentLanguage === 'pt-BR' ? 'Talhões / Áreas' : 'Lotes / Chacras' },
            { val: 'machinery', name: currentLanguage === 'pt-BR' ? 'Máquinas / Frota' : 'Maquinarias / Flota' },
            { val: 'staff', name: currentLanguage === 'pt-BR' ? 'Colaboradores / Equipe' : 'Personal / Diaristas' }
        ];
        list.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.val;
            opt.textContent = item.name;
            catGroup.appendChild(opt);
        });
        entitySelect.appendChild(catGroup);
    } else if (module === 'frota') {
        const machGroup = document.createElement('optgroup');
        machGroup.label = currentLanguage === 'pt-BR' ? 'Veículos e Frota' : 'Vehículos y Flota';
        db.machinery.forEach(m => {
            const opt = document.createElement('option');
            opt.value = `mach-${m.id}`;
            opt.textContent = `${m.name} (${m.type})`;
            machGroup.appendChild(opt);
        });
        entitySelect.appendChild(machGroup);
        
    } else if (module === 'equipe') {
        const staffGroup = document.createElement('optgroup');
        staffGroup.label = currentLanguage === 'pt-BR' ? 'Colaboradores e Diaristas' : 'Personal y Diaristas';
        db.staff.forEach(s => {
            const opt = document.createElement('option');
            opt.value = `staff-${s.id}`;
            opt.textContent = `${s.name} (${s.role})`;
            staffGroup.appendChild(opt);
        });
        entitySelect.appendChild(staffGroup);
    }
}

function setReportQuickRange(rangeType) {
    const startInput = document.getElementById('report-start-date');
    const endInput = document.getElementById('report-end-date');
    if (!startInput || !endInput) return;
    
    const now = new Date('2026-05-24');
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    if (rangeType === 'este_mes') {
        startInput.value = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`;
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
        endInput.value = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
    } else if (rangeType === 'mes_passado') {
        let prevMonth = currentMonth - 1;
        let prevYear = currentYear;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        startInput.value = `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-01`;
        const lastDay = new Date(prevYear, prevMonth + 1, 0).getDate();
        endInput.value = `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
    } else if (rangeType === '3_meses') {
        const threeMonthsAgo = new Date('2026-05-24');
        threeMonthsAgo.setDate(threeMonthsAgo.getDate() - 90);
        startInput.value = threeMonthsAgo.toISOString().split('T')[0];
        endInput.value = now.toISOString().split('T')[0];
    } else if (rangeType === 'ano_atual') {
        startInput.value = `${currentYear}-01-01`;
        endInput.value = `${currentYear}-12-31`;
    } else if (rangeType === 'tudo') {
        startInput.value = '';
        endInput.value = '';
    }
    
    triggerManualReportGeneration();
}

function triggerManualReportGeneration() {
    const moduleSelect = document.getElementById('report-module-select');
    const startInput = document.getElementById('report-start-date');
    const endInput = document.getElementById('report-end-date');
    const entitySelect = document.getElementById('report-entity-select');
    
    if (!moduleSelect || !entitySelect) return;
    
    const module = moduleSelect.value;
    const start = startInput ? startInput.value : '';
    const end = endInput ? endInput.value : '';
    const entity = entitySelect.value;
    
    generateReport(module, start, end, entity);
}

function generateReport(module, startDate, endDate, specificEntity) {
    const isPt = currentLanguage === 'pt-BR';
    const timestampEl = document.getElementById('report-generated-timestamp');
    if (timestampEl) {
        const dateStr = new Date('2026-05-24T15:00:00').toLocaleString(isPt ? 'pt-BR' : 'es-PY');
        timestampEl.textContent = `${isPt ? 'Gerado em' : 'Generado en'}: ${dateStr}`;
    }
    
    const subtitleEl = document.getElementById('report-rendered-subtitle');
    let periodStr = (startDate || endDate) 
        ? `${startDate || '...'} ${isPt ? 'até' : 'hasta'} ${endDate || '...'}`
        : (isPt ? 'Todo o histórico' : 'Todo el historial');
        
    let entityLabel = isPt ? 'Filtro: Todos' : 'Filtro: Todos';
    const entitySelect = document.getElementById('report-entity-select');
    if (entitySelect && entitySelect.selectedIndex >= 0) {
        entityLabel = `${isPt ? 'Filtro' : 'Filtro'}: ${entitySelect.options[entitySelect.selectedIndex].text}`;
    }
    if (subtitleEl) {
        subtitleEl.textContent = `${isPt ? 'Período' : 'Período'}: ${periodStr} | ${entityLabel}`;
    }

    const titleEl = document.getElementById('report-rendered-title');
    const headerIcon = document.getElementById('report-header-icon');
    
    const kpiGrid = document.getElementById('report-kpi-grid');
    const tableHeader = document.getElementById('report-table-header');
    const tableBody = document.getElementById('report-table-body');
    const chartContainer = document.getElementById('report-chart-container');
    const emptyMsg = document.getElementById('report-empty-message');
    
    kpiGrid.innerHTML = '';
    tableHeader.innerHTML = '';
    tableBody.innerHTML = '';
    chartContainer.innerHTML = '';
    emptyMsg.classList.add('hidden');
    
    if (module === 'financeiro') {
        if (titleEl) titleEl.textContent = isPt ? 'Relatório Financeiro (Caixa)' : 'Reporte Financiero (Caja)';
        if (headerIcon) headerIcon.textContent = 'payments';
        
        let list = db.transactions.filter(t => {
            if (startDate && t.date < startDate) return false;
            if (endDate && t.date > endDate) return false;
            
            if (specificEntity && specificEntity !== 'all') {
                if (specificEntity.startsWith('cat-')) {
                    const parts = specificEntity.split('-'); 
                    const type = parts[1]; 
                    const cat = parts[2]; 
                    if (t.type !== type || t.category !== cat) return false;
                } else if (specificEntity.startsWith('plot-')) {
                    const plotId = specificEntity.substring(5);
                    if (t.plot_id !== plotId) return false;
                }
            }
            return true;
        });
        
        list.sort((a, b) => b.date.localeCompare(a.date));
        
        let totalRevenue = 0;
        let totalExpense = 0;
        list.forEach(t => {
            const valBrl = convertValue(t.amount, t.currency, 'BRL');
            if (t.type === 'receita') {
                totalRevenue += valBrl;
            } else {
                totalExpense += valBrl;
            }
        });
        const netBalance = totalRevenue - totalExpense;
        
        kpiGrid.innerHTML = `
            <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_total_revenue}</span>
                <span class="font-data-numeral text-lg font-bold text-[#10b981] block">${formatCurrency(totalRevenue, 'BRL')}</span>
            </div>
            <div class="bg-error-container/20 border border-error-container/40 p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_total_expense}</span>
                <span class="font-data-numeral text-lg font-bold text-error block">${formatCurrency(totalExpense, 'BRL')}</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_net_balance}</span>
                <span class="font-data-numeral text-lg font-bold block ${netBalance >= 0 ? 'text-[#10b981]' : 'text-error'}">${formatCurrency(netBalance, 'BRL')}</span>
            </div>
        `;
        
        tableHeader.innerHTML = `
            <th class="p-3">${isPt ? 'Data' : 'Fecha'}</th>
            <th class="p-3">${isPt ? 'Descrição' : 'Descripción'}</th>
            <th class="p-3">${isPt ? 'Categoria' : 'Categoría'}</th>
            <th class="p-3">${isPt ? 'Tipo' : 'Tipo'}</th>
            <th class="p-3 text-right">${isPt ? 'Valor Original' : 'Monto Original'}</th>
            <th class="p-3 text-right">${isPt ? 'Equiv. BRL' : 'Equiv. BRL'}</th>
        `;
        
        if (list.length === 0) {
            emptyMsg.classList.remove('hidden');
        } else {
            list.forEach(t => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                const valBrl = convertValue(t.amount, t.currency, 'BRL');
                
                const typeText = t.type === 'receita' 
                    ? `<span class="bg-[#10b981]/15 text-[#047857] px-2 py-0.5 rounded text-[10px] font-bold uppercase">${isPt ? 'Entrada' : 'Ingreso'}</span>`
                    : `<span class="bg-error/15 text-error px-2 py-0.5 rounded text-[10px] font-bold uppercase">${isPt ? 'Saída' : 'Egreso'}</span>`;
                    
                tr.innerHTML = `
                    <td class="p-3 font-semibold font-data-numeral">${t.date}</td>
                    <td class="p-3">${escapeHTML(t.description)}</td>
                    <td class="p-3 font-bold text-on-surface-variant">${t.category}</td>
                    <td class="p-3">${typeText}</td>
                    <td class="p-3 text-right font-semibold">${formatCurrency(t.amount, t.currency)}</td>
                    <td class="p-3 text-right font-bold text-primary">${formatCurrency(valBrl, 'BRL')}</td>
                `;
                tableBody.appendChild(tr);
            });
            
            const cats = {};
            list.forEach(t => {
                const valBrl = convertValue(t.amount, t.currency, 'BRL');
                const key = `${t.type === 'receita' ? '+' : '-'}${t.category}`;
                cats[key] = (cats[key] || 0) + valBrl;
            });
            
            const chartData = Object.keys(cats).map(k => {
                const type = k.startsWith('+') ? 'receita' : 'gasto';
                const label = k.substring(1);
                return { label, value: cats[k], type };
            });
            
            chartContainer.innerHTML = drawSvgBarChart(chartData);
        }
        
    } else if (module === 'insumos') {
        if (titleEl) titleEl.textContent = isPt ? 'Relatório de Defensivos & Aplicações' : 'Reporte de Defensivos y Aplicaciones';
        if (headerIcon) headerIcon.textContent = 'science';
        
        let list = db.applications.filter(a => {
            if (startDate && a.date < startDate) return false;
            if (endDate && a.date > endDate) return false;
            
            if (specificEntity && specificEntity !== 'all') {
                if (specificEntity.startsWith('pest-')) {
                    const pestId = specificEntity.substring(5);
                    if (a.pesticide_id !== pestId) return false;
                } else if (specificEntity.startsWith('plot-')) {
                    const plotId = specificEntity.substring(5);
                    if (a.plot_id !== plotId) return false;
                }
            }
            return true;
        });
        
        list.sort((a, b) => b.date.localeCompare(a.date));
        
        let totalApplied = 0;
        list.forEach(a => totalApplied += a.amount_applied);
        const avgApplied = list.length > 0 ? (totalApplied / list.length) : 0;
        
        kpiGrid.innerHTML = `
            <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_total_applied}</span>
                <span class="font-data-numeral text-lg font-bold text-primary block">${totalApplied.toFixed(1)} L</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_avg_applied}</span>
                <span class="font-data-numeral text-lg font-bold block">${avgApplied.toFixed(1)} L</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_count}</span>
                <span class="font-data-numeral text-lg font-bold block text-primary">${list.length}</span>
            </div>
        `;
        
        tableHeader.innerHTML = `
            <th class="p-3">${isPt ? 'Data' : 'Fecha'}</th>
            <th class="p-3">${isPt ? 'Talhão' : 'Lote'}</th>
            <th class="p-3">${isPt ? 'Defensivo Utilizado' : 'Defensivo Aplicado'}</th>
            <th class="p-3 text-right">${isPt ? 'Volume Aplicado (L)' : 'Volumen Aplicado (L)'}</th>
            <th class="p-3">${isPt ? 'Clima de Aplicação' : 'Clima de Aplicación'}</th>
        `;
        
        if (list.length === 0) {
            emptyMsg.classList.remove('hidden');
        } else {
            list.forEach(a => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                const plot = db.plots.find(p => p.id === a.plot_id);
                const pest = db.pesticides.find(p => p.id === a.pesticide_id);
                
                tr.innerHTML = `
                    <td class="p-3 font-semibold font-data-numeral">${a.date}</td>
                    <td class="p-3 font-bold">${plot ? plot.name : (a.plot_id || '-')}</td>
                    <td class="p-3 font-bold text-primary">${pest ? pest.name : (a.pesticide_id || '-')}</td>
                    <td class="p-3 text-right font-bold font-data-numeral text-[#10b981]">${a.amount_applied} L</td>
                    <td class="p-3 opacity-80">${a.weather_condition || '-'}</td>
                `;
                tableBody.appendChild(tr);
            });
            
            const pestsMap = {};
            list.forEach(a => {
                const pest = db.pesticides.find(p => p.id === a.pesticide_id);
                const name = pest ? pest.name : a.pesticide_id;
                pestsMap[name] = (pestsMap[name] || 0) + a.amount_applied;
            });
            
            const chartData = Object.keys(pestsMap).map(k => ({ label: k, value: pestsMap[k] }));
            chartContainer.innerHTML = drawSvgBarChart(chartData, 'tertiary');
        }
        
    } else if (module === 'combustivel') {
        if (titleEl) titleEl.textContent = isPt ? 'Relatório de Consumo de Combustível' : 'Reporte de Consumo de Gasoil';
        if (headerIcon) headerIcon.textContent = 'gas_meter';
        
        let list = db.fuelLogs.filter(f => {
            if (startDate && f.date < startDate) return false;
            if (endDate && f.date > endDate) return false;
            
            if (specificEntity && specificEntity !== 'all') {
                if (specificEntity.startsWith('mach-')) {
                    const machId = specificEntity.substring(5);
                    const mach = db.machinery.find(m => m.id === machId);
                    
                    if (f.mach_id) {
                        if (f.mach_id !== machId) return false;
                    } else if (mach) {
                        if (!f.desc.toLowerCase().includes(mach.name.toLowerCase())) return false;
                    } else {
                        return false;
                    }
                }
            }
            return true;
        });
        
        list.sort((a, b) => b.date.localeCompare(a.date));
        
        let totalLiters = 0;
        let totalCostBrl = 0;
        list.forEach(f => {
            totalLiters += f.amount_liters;
            totalCostBrl += convertValue(f.cost_value, f.currency, 'BRL');
        });
        const avgRefuels = list.length > 0 ? (totalLiters / list.length) : 0;
        
        kpiGrid.innerHTML = `
            <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_total_liters}</span>
                <span class="font-data-numeral text-lg font-bold text-primary block">${totalLiters} L</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_total_cost}</span>
                <span class="font-data-numeral text-lg font-bold block text-error">${formatCurrency(totalCostBrl, 'BRL')}</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_avg_consumption}</span>
                <span class="font-data-numeral text-lg font-bold block text-primary">${avgRefuels.toFixed(1)} L</span>
            </div>
        `;
        
        tableHeader.innerHTML = `
            <th class="p-3">${isPt ? 'Data' : 'Fecha'}</th>
            <th class="p-3">${isPt ? 'Descrição / Destino' : 'Descripción / Destino'}</th>
            <th class="p-3 text-right">${isPt ? 'Quantidade (L)' : 'Cantidad (L)'}</th>
            <th class="p-3 text-right">${isPt ? 'Custo Original' : 'Costo Original'}</th>
            <th class="p-3 text-right">${isPt ? 'Equiv. BRL' : 'Equiv. BRL'}</th>
        `;
        
        if (list.length === 0) {
            emptyMsg.classList.remove('hidden');
        } else {
            list.forEach(f => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                const costBrl = convertValue(f.cost_value, f.currency, 'BRL');
                
                tr.innerHTML = `
                    <td class="p-3 font-semibold font-data-numeral">${f.date}</td>
                    <td class="p-3 font-bold">${escapeHTML(f.desc)}</td>
                    <td class="p-3 text-right font-bold text-[#10b981] font-data-numeral">${f.amount_liters} L</td>
                    <td class="p-3 text-right">${f.cost_value > 0 ? formatCurrency(f.cost_value, f.currency) : '-'}</td>
                    <td class="p-3 text-right font-bold text-error">${f.cost_value > 0 ? formatCurrency(costBrl, 'BRL') : '-'}</td>
                `;
                tableBody.appendChild(tr);
            });
            
            const daysMap = {};
            list.slice(0, 10).forEach(f => {
                daysMap[f.date] = (daysMap[f.date] || 0) + f.amount_liters;
            });
            const chartData = Object.keys(daysMap).map(k => ({ label: k, value: daysMap[k] }));
            chartData.reverse(); 
            chartContainer.innerHTML = drawSvgBarChart(chartData);
        }
        
    } else if (module === 'producao') {
        if (titleEl) titleEl.textContent = isPt ? 'Relatório de Produção e Colheita' : 'Reporte de Producción y Cosecha';
        if (headerIcon) headerIcon.textContent = 'grain';
        
        let list = db.seedsGrains.filter(sg => {
            if (startDate && sg.date < startDate) return false;
            if (endDate && sg.date > endDate) return false;
            
            if (specificEntity && specificEntity !== 'all') {
                if (specificEntity.startsWith('safra-')) {
                    const safraId = specificEntity.substring(6);
                    if (sg.safra_id !== safraId) return false;
                } else if (specificEntity.startsWith('plot-')) {
                    const plotId = specificEntity.substring(5);
                    const plot = db.plots.find(p => p.id === plotId);
                    if (plot && !sg.name.toLowerCase().includes(plot.name.toLowerCase())) return false;
                }
            }
            return true;
        });
        
        list.sort((a, b) => b.date.localeCompare(a.date));
        
        let totalBags = 0;
        let totalValueBrl = 0;
        list.forEach(sg => {
            if (sg.unit === 'Sacas' || sg.unit === 'Sacos') {
                totalBags += sg.quantity;
            }
            totalValueBrl += convertValue(sg.cost, sg.currency, 'BRL');
        });
        
        kpiGrid.innerHTML = `
            <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_total_bags}</span>
                <span class="font-data-numeral text-lg font-bold text-primary block">${totalBags} sacas</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_total_weight}</span>
                <span class="font-data-numeral text-lg font-bold block text-[#10b981]">${(totalBags * 60).toLocaleString()} Kg</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${isPt ? 'Valoração Estimada' : 'Valor Estimado'}</span>
                <span class="font-data-numeral text-lg font-bold block text-primary">${formatCurrency(totalValueBrl, 'BRL')}</span>
            </div>
        `;
        
        tableHeader.innerHTML = `
            <th class="p-3">${isPt ? 'Data' : 'Fecha'}</th>
            <th class="p-3">${isPt ? 'Tipo de Registro' : 'Tipo de Registro'}</th>
            <th class="p-3">${isPt ? 'Nome do Item / Variedade' : 'Nombre / Variedad'}</th>
            <th class="p-3 text-right">${isPt ? 'Quantidade' : 'Cantidad'}</th>
            <th class="p-3 text-right">${isPt ? 'Valor Estimado' : 'Valor Estimado'}</th>
        `;
        
        if (list.length === 0) {
            emptyMsg.classList.remove('hidden');
        } else {
            list.forEach(sg => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                const costBrl = convertValue(sg.cost, sg.currency, 'BRL');
                
                const typeText = sg.type.includes('Colhido') || sg.type.includes('Cosechado')
                    ? `<span class="bg-[#10b981]/15 text-[#047857] px-2 py-0.5 rounded text-[10px] font-bold uppercase">${isPt ? 'Colheita' : 'Cosecha'}</span>`
                    : `<span class="bg-primary/15 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase">${isPt ? 'Compra / Tratamento' : 'Semilla'}</span>`;
                    
                tr.innerHTML = `
                    <td class="p-3 font-semibold font-data-numeral">${sg.date}</td>
                    <td class="p-3">${typeText}</td>
                    <td class="p-3 font-bold">${escapeHTML(sg.name)}</td>
                    <td class="p-3 text-right font-bold text-primary font-data-numeral">${sg.quantity} ${sg.unit}</td>
                    <td class="p-3 text-right font-bold text-[#10b981]">${formatCurrency(costBrl, 'BRL')}</td>
                `;
                tableBody.appendChild(tr);
            });
            
            const namesMap = {};
            list.forEach(sg => {
                namesMap[sg.name] = (namesMap[sg.name] || 0) + sg.quantity;
            });
            const chartData = Object.keys(namesMap).map(k => ({ label: k, value: namesMap[k] }));
            chartContainer.innerHTML = drawSvgBarChart(chartData);
        }
        
    } else if (module === 'cadastros') {
        if (titleEl) titleEl.textContent = isPt ? 'Relatório de Ativos e Cadastros' : 'Reporte de Activos y Registros';
        if (headerIcon) headerIcon.textContent = 'inventory';
        
        const type = (specificEntity && specificEntity !== 'all') ? specificEntity : 'plots';
        
        if (type === 'plots') {
            kpiGrid.innerHTML = `
                <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm col-span-3">
                    <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_active_plots}</span>
                    <span class="font-data-numeral text-lg font-bold text-primary block">${db.plots.length} talhões cadastrados</span>
                </div>
            `;
            
            tableHeader.innerHTML = `
                <th class="p-3">${isPt ? 'ID' : 'ID'}</th>
                <th class="p-3">${isPt ? 'Nome do Talhão' : 'Nombre del Lote'}</th>
                <th class="p-3 text-right">${isPt ? 'Tamanho (Hectares)' : 'Tamaño (Hectáreas)'}</th>
                <th class="p-3 text-right">${isPt ? 'Tamanho (Alqueires)' : 'Tamaño (Alqueires)'}</th>
                <th class="p-3">${isPt ? 'Cultura' : 'Cultura'}</th>
                <th class="p-3">${isPt ? 'Status' : 'Estado'}</th>
            `;
            
            if (db.plots.length === 0) {
                emptyMsg.classList.remove('hidden');
            } else {
                db.plots.forEach(p => {
                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                    tr.innerHTML = `
                        <td class="p-3 text-on-surface-variant font-data-numeral">${p.id}</td>
                        <td class="p-3 font-bold text-primary">${escapeHTML(p.name)}</td>
                        <td class="p-3 text-right font-semibold font-data-numeral">${p.size_hectares} ha</td>
                        <td class="p-3 text-right font-semibold font-data-numeral">${p.size_alqueires} alq</td>
                        <td class="p-3 font-bold">${p.crop_type}</td>
                        <td class="p-3"><span class="bg-[#10b981]/15 text-[#047857] px-2 py-0.5 rounded text-[10px] font-bold uppercase">${p.status || 'Ativo'}</span></td>
                    `;
                    tableBody.appendChild(tr);
                });
                
                const plotData = db.plots.map(p => ({ label: p.name, value: p.size_hectares }));
                chartContainer.innerHTML = drawSvgBarChart(plotData);
            }
            
        } else if (type === 'machinery') {
            kpiGrid.innerHTML = `
                <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm col-span-3">
                    <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_active_machinery}</span>
                    <span class="font-data-numeral text-lg font-bold text-primary block">${db.machinery.length} veículos na frota</span>
                </div>
            `;
            
            tableHeader.innerHTML = `
                <th class="p-3">${isPt ? 'Modelo' : 'Modelo'}</th>
                <th class="p-3">${isPt ? 'Tipo de Máquina' : 'Tipo de Máquina'}</th>
                <th class="p-3 text-right">${isPt ? 'Nível Combustível' : 'Combustible'}</th>
                <th class="p-3">${isPt ? 'Status' : 'Estado'}</th>
                <th class="p-3">${isPt ? 'Última Ação' : 'Última Acción'}</th>
            `;
            
            if (db.machinery.length === 0) {
                emptyMsg.classList.remove('hidden');
            } else {
                db.machinery.forEach(m => {
                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                    tr.innerHTML = `
                        <td class="p-3 font-bold text-primary">${escapeHTML(m.name)}</td>
                        <td class="p-3 font-semibold">${m.type}</td>
                        <td class="p-3 text-right font-bold font-data-numeral ${m.fuel_level_percent < 20 ? 'text-error' : 'text-[#10b981]'}">${m.fuel_level_percent}%</td>
                        <td class="p-3"><span class="bg-[#10b981]/15 text-[#047857] px-2 py-0.5 rounded text-[10px] font-bold uppercase">${m.status}</span></td>
                        <td class="p-3 text-on-surface-variant">${escapeHTML(m.last_action)}</td>
                    `;
                    tableBody.appendChild(tr);
                });
                
                const machData = db.machinery.map(m => ({ label: m.name, value: m.fuel_level_percent }));
                chartContainer.innerHTML = drawSvgBarChart(machData, 'tertiary');
            }
            
        } else if (type === 'staff') {
            kpiGrid.innerHTML = `
                <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm col-span-3">
                    <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_active_staff}</span>
                    <span class="font-data-numeral text-lg font-bold text-primary block">${db.staff.length} colaboradores</span>
                </div>
            `;
            
            tableHeader.innerHTML = `
                <th class="p-3">${isPt ? 'Nome' : 'Nombre'}</th>
                <th class="p-3">${isPt ? 'Função' : 'Función'}</th>
                <th class="p-3">${isPt ? 'Vínculo' : 'Vínculo'}</th>
                <th class="p-3 text-right">${isPt ? 'Salário / Diária' : 'Salario / Diaria'}</th>
            `;
            
            if (db.staff.length === 0) {
                emptyMsg.classList.remove('hidden');
            } else {
                db.staff.forEach(s => {
                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                    tr.innerHTML = `
                        <td class="p-3 font-bold text-primary">${escapeHTML(s.name)}</td>
                        <td class="p-3 font-semibold">${s.role}</td>
                        <td class="p-3"><span class="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-semibold">${s.type}</span></td>
                        <td class="p-3 text-right font-bold text-on-surface font-data-numeral">${formatCurrency(s.wage_rate, s.currency)}</td>
                    `;
                    tableBody.appendChild(tr);
                });
                
                const staffData = db.staff.map(s => ({ label: s.name, value: convertValue(s.wage_rate, s.currency, 'BRL') }));
                chartContainer.innerHTML = drawSvgBarChart(staffData);
            }
        }
    } else if (module === 'frota') {
        if (titleEl) titleEl.textContent = translations[currentLanguage].rep_fleet_title;
        if (headerIcon) headerIcon.textContent = 'local_shipping';

        let targetMachId = null;
        if (specificEntity && specificEntity.startsWith('mach-')) {
            targetMachId = specificEntity.substring(5);
        }

        let machinesToReport = db.machinery;
        if (targetMachId) {
            machinesToReport = db.machinery.filter(m => m.id === targetMachId);
        }

        let filteredFuelLogs = db.fuelLogs.filter(f => {
            if (startDate && f.date < startDate) return false;
            if (endDate && f.date > endDate) return false;
            
            if (targetMachId) {
                const mach = db.machinery.find(m => m.id === targetMachId);
                if (f.mach_id) {
                    return f.mach_id === targetMachId;
                } else if (mach) {
                    return f.desc.toLowerCase().includes(mach.name.toLowerCase());
                }
                return false;
            }
            return true;
        });

        const maintKeywords = ['manutenção', 'manutencao', 'peça', 'peca', 'reparo', 'oficina', 'conserto', 'pneu', 'lubrificante', 'graxa', 'reparação', 'repuestos', 'taller', 'mecánico', 'mecânico'];
        
        let filteredMaintTx = db.transactions.filter(t => {
            if (t.type !== 'gasto') return false;
            if (startDate && t.date < startDate) return false;
            if (endDate && t.date > endDate) return false;
            if (t.category === 'Combustível') return false; 

            let matchesMachine = false;
            for (let m of machinesToReport) {
                if (t.description.toLowerCase().includes(m.name.toLowerCase())) {
                    matchesMachine = true;
                    break;
                }
            }

            if (targetMachId) {
                return matchesMachine;
            }

            if (matchesMachine) return true;
            
            if (t.category === 'Outros' || t.category === 'Otras Operaciones') {
                const descLower = t.description.toLowerCase();
                return maintKeywords.some(kw => descLower.includes(kw));
            }

            return false;
        });

        let totalFuelLiters = 0;
        let totalFuelCostBrl = 0;
        filteredFuelLogs.forEach(f => {
            totalFuelLiters += f.amount_liters;
            totalFuelCostBrl += convertValue(f.cost_value, f.currency, 'BRL');
        });

        let totalMaintCostBrl = 0;
        filteredMaintTx.forEach(t => {
            totalMaintCostBrl += convertValue(t.amount, t.currency, 'BRL');
        });

        const totalFleetCostBrl = totalFuelCostBrl + totalMaintCostBrl;

        kpiGrid.innerHTML = `
            <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_fleet_kpi_fuel}</span>
                <span class="font-data-numeral text-lg font-bold text-primary block">${totalFuelLiters} L / ${formatCurrency(totalFuelCostBrl, 'BRL')}</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_fleet_kpi_maintenance}</span>
                <span class="font-data-numeral text-lg font-bold block text-error">${formatCurrency(totalMaintCostBrl, 'BRL')}</span>
            </div>
            <div class="bg-error-container/20 border border-error-container/40 p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_fleet_kpi_total}</span>
                <span class="font-data-numeral text-lg font-bold block text-error">${formatCurrency(totalFleetCostBrl, 'BRL')}</span>
            </div>
        `;

        tableHeader.innerHTML = `
            <th class="p-3">${isPt ? 'Data' : 'Fecha'}</th>
            <th class="p-3">${translations[currentLanguage].rep_th_machine}</th>
            <th class="p-3">${translations[currentLanguage].rep_th_type}</th>
            <th class="p-3">${isPt ? 'Descrição' : 'Descripción'}</th>
            <th class="p-3 text-right">${isPt ? 'Custo Original' : 'Costo Original'}</th>
            <th class="p-3 text-right">${isPt ? 'Equiv. BRL' : 'Equiv. BRL'}</th>
        `;

        let combinedItems = [];
        
        filteredFuelLogs.forEach(f => {
            const mach = db.machinery.find(m => m.id === f.mach_id);
            const machName = mach ? mach.name : (f.mach_id ? f.mach_id : (isPt ? 'Geral' : 'General'));
            combinedItems.push({
                date: f.date,
                entityName: machName,
                type: translations[currentLanguage].rep_type_refuel,
                description: f.desc,
                originalVal: f.cost_value,
                currency: f.currency,
                valBrl: convertValue(f.cost_value, f.currency, 'BRL'),
                isFuel: true
            });
        });

        filteredMaintTx.forEach(t => {
            let machName = isPt ? 'Geral' : 'General';
            for (let m of db.machinery) {
                if (t.description.toLowerCase().includes(m.name.toLowerCase())) {
                    machName = m.name;
                    break;
                }
            }
            
            let typeLabel = translations[currentLanguage].rep_type_maintenance;
            const descLower = t.description.toLowerCase();
            if (descLower.includes('peça') || descLower.includes('peca') || descLower.includes('repuesto') || descLower.includes('pneu') || descLower.includes('filtro') || descLower.includes('óleo') || descLower.includes('oleo') || descLower.includes('lubrificante') || descLower.includes('graxa')) {
                typeLabel = translations[currentLanguage].rep_type_parts;
            } else if (descLower.includes('reparo') || descLower.includes('conserto') || descLower.includes('reparación') || descLower.includes('oficina') || descLower.includes('taller')) {
                typeLabel = translations[currentLanguage].rep_type_repair;
            }

            combinedItems.push({
                date: t.date,
                entityName: machName,
                type: typeLabel,
                description: t.description,
                originalVal: t.amount,
                currency: t.currency,
                valBrl: convertValue(t.amount, t.currency, 'BRL'),
                isFuel: false
            });
        });

        combinedItems.sort((a, b) => b.date.localeCompare(a.date));

        if (combinedItems.length === 0) {
            emptyMsg.classList.remove('hidden');
        } else {
            combinedItems.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                
                const typeText = item.isFuel
                    ? `<span class="bg-[#10b981]/15 text-[#047857] px-2 py-0.5 rounded text-[10px] font-bold uppercase">${item.type}</span>`
                    : `<span class="bg-tertiary/15 text-tertiary-fixed-dim dark:text-tertiary px-2 py-0.5 rounded text-[10px] font-bold uppercase">${item.type}</span>`;
                
                tr.innerHTML = `
                    <td class="p-3 font-semibold font-data-numeral">${item.date}</td>
                    <td class="p-3 font-bold text-on-surface-variant">${escapeHTML(item.entityName)}</td>
                    <td class="p-3">${typeText}</td>
                    <td class="p-3">${escapeHTML(item.description)}</td>
                    <td class="p-3 text-right font-semibold">${item.originalVal > 0 ? formatCurrency(item.originalVal, item.currency) : '-'}</td>
                    <td class="p-3 text-right font-bold text-error">${item.originalVal > 0 ? formatCurrency(item.valBrl, 'BRL') : '-'}</td>
                `;
                tableBody.appendChild(tr);
            });

            const machCosts = {};
            combinedItems.forEach(item => {
                machCosts[item.entityName] = (machCosts[item.entityName] || 0) + item.valBrl;
            });

            const chartData = Object.keys(machCosts).map(k => ({ label: k, value: machCosts[k] }));
            chartData.sort((a, b) => b.value - a.value);
            chartContainer.innerHTML = drawSvgBarChart(chartData.slice(0, 10));
        }

    } else if (module === 'equipe') {
        if (titleEl) titleEl.textContent = translations[currentLanguage].rep_staff_title;
        if (headerIcon) headerIcon.textContent = 'groups';

        let targetStaffId = null;
        if (specificEntity && specificEntity.startsWith('staff-')) {
            targetStaffId = specificEntity.substring(6);
        }

        let staffToReport = db.staff;
        if (targetStaffId) {
            staffToReport = db.staff.filter(s => s.id === targetStaffId);
        }

        let filteredStaffTx = db.transactions.filter(t => {
            if (t.type !== 'gasto') return false;
            if (startDate && t.date < startDate) return false;
            if (endDate && t.date > endDate) return false;

            let matchesStaff = false;
            for (let s of staffToReport) {
                if (t.description.toLowerCase().includes(s.name.toLowerCase())) {
                    matchesStaff = true;
                    break;
                }
            }

            if (targetStaffId) {
                return matchesStaff;
            }

            return matchesStaff || t.category === 'Funcionários';
        });

        let totalPaidBrl = 0;
        let totalCltBrl = 0;
        let totalDiaristaBrl = 0;

        let tableRows = [];

        filteredStaffTx.forEach(t => {
            const valBrl = convertValue(t.amount, t.currency, 'BRL');
            totalPaidBrl += valBrl;

            let matchedStaff = null;
            for (let s of db.staff) {
                if (t.description.toLowerCase().includes(s.name.toLowerCase())) {
                    matchedStaff = s;
                    break;
                }
            }

            let isClt = true; 
            let staffName = matchedStaff ? matchedStaff.name : (isPt ? 'Geral / Equipe' : 'General / Personal');
            let vínculoLabel = '';

            if (matchedStaff) {
                const typeLower = matchedStaff.type.toLowerCase();
                if (typeLower.includes('diarista') || typeLower.includes('jornalero') || typeLower.includes('horista')) {
                    isClt = false;
                }
            } else {
                const descLower = t.description.toLowerCase();
                if (descLower.includes('diaria') || descLower.includes('diária') || descLower.includes('jornal') || descLower.includes('dia') || descLower.includes('hora')) {
                    isClt = false;
                }
            }

            if (isClt) {
                totalCltBrl += valBrl;
                vínculoLabel = isPt ? 'CLT (Mensalista)' : 'CLT (Mensual)';
            } else {
                totalDiaristaBrl += valBrl;
                vínculoLabel = isPt ? 'Diarista / Horista' : 'Jornalero / Horista';
            }

            tableRows.push({
                date: t.date,
                name: staffName,
                vinculo: vínculoLabel,
                description: t.description,
                originalVal: t.amount,
                currency: t.currency,
                valBrl: valBrl,
                isClt: isClt
            });
        });

        kpiGrid.innerHTML = `
            <div class="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_staff_kpi_total}</span>
                <span class="font-data-numeral text-lg font-bold text-primary block">${formatCurrency(totalPaidBrl, 'BRL')}</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_staff_kpi_clt}</span>
                <span class="font-data-numeral text-lg font-bold block text-primary">${formatCurrency(totalCltBrl, 'BRL')}</span>
            </div>
            <div class="bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-sm">
                <span class="text-[10px] text-on-surface-variant font-bold block uppercase">${translations[currentLanguage].rep_staff_kpi_diarista}</span>
                <span class="font-data-numeral text-lg font-bold block text-primary">${formatCurrency(totalDiaristaBrl, 'BRL')}</span>
            </div>
        `;

        tableHeader.innerHTML = `
            <th class="p-3">${isPt ? 'Data' : 'Fecha'}</th>
            <th class="p-3">${translations[currentLanguage].rep_th_staff}</th>
            <th class="p-3">${translations[currentLanguage].rep_th_wage_type}</th>
            <th class="p-3">${isPt ? 'Descrição' : 'Descripción'}</th>
            <th class="p-3 text-right">${isPt ? 'Valor Pago' : 'Monto Pagado'}</th>
            <th class="p-3 text-right">${isPt ? 'Equiv. BRL' : 'Equiv. BRL'}</th>
        `;

        tableRows.sort((a, b) => b.date.localeCompare(a.date));

        if (tableRows.length === 0) {
            emptyMsg.classList.remove('hidden');
        } else {
            tableRows.forEach(row => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-high/40 transition-colors';
                
                const typeText = row.isClt
                    ? `<span class="bg-[#10b981]/15 text-[#047857] px-2 py-0.5 rounded text-[10px] font-bold uppercase">${row.vinculo}</span>`
                    : `<span class="bg-tertiary/15 text-tertiary-fixed-dim dark:text-tertiary px-2 py-0.5 rounded text-[10px] font-bold uppercase">${row.vinculo}</span>`;
                
                tr.innerHTML = `
                    <td class="p-3 font-semibold font-data-numeral">${row.date}</td>
                    <td class="p-3 font-bold text-on-surface-variant">${escapeHTML(row.name)}</td>
                    <td class="p-3">${typeText}</td>
                    <td class="p-3">${escapeHTML(row.description)}</td>
                    <td class="p-3 text-right font-semibold">${formatCurrency(row.originalVal, row.currency)}</td>
                    <td class="p-3 text-right font-bold text-primary">${formatCurrency(row.valBrl, 'BRL')}</td>
                `;
                tableBody.appendChild(tr);
            });

            const staffCosts = {};
            tableRows.forEach(row => {
                staffCosts[row.name] = (staffCosts[row.name] || 0) + row.valBrl;
            });

            const chartData = Object.keys(staffCosts).map(k => ({ label: k, value: staffCosts[k] }));
            chartData.sort((a, b) => b.value - a.value);
            chartContainer.innerHTML = drawSvgBarChart(chartData.slice(0, 10), 'tertiary');
        }
    }
}

function printActiveReport() {
    window.print();
}

function drawSvgBarChart(dataPoints, colorTheme = 'primary') {
    if (!dataPoints || dataPoints.length === 0) {
        return `<div class="text-xs text-on-surface-variant/60 font-semibold pt-4">${currentLanguage === 'pt-BR' ? 'Sem dados para exibição do gráfico' : 'Sin datos para mostrar el gráfico'}</div>`;
    }
    
    const maxVal = Math.max(...dataPoints.map(d => d.value), 1);
    const width = 600;
    const height = 160;
    const paddingLeft = 60;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;
    
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;
    const barWidth = Math.max(8, Math.min(45, (chartWidth / dataPoints.length) * 0.6));
    const gap = (chartWidth / dataPoints.length) - barWidth;
    
    let svg = `<svg viewBox="0 0 ${width} ${height}" class="w-full h-full select-none" style="background: transparent;">`;
    
    for (let i = 0; i <= 4; i++) {
        const y = paddingTop + chartHeight - (chartHeight * (i / 4));
        const val = (maxVal * (i / 4));
        svg += `
            <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="currentColor" stroke-dasharray="3,3" opacity="0.15" />
            <text x="${paddingLeft - 8}" y="${y + 3}" class="fill-on-surface-variant opacity-75 font-semibold" text-anchor="end" style="font-size: 8px;">${formatChartVal(val)}</text>
        `;
    }
    
    dataPoints.forEach((d, idx) => {
        const x = paddingLeft + (idx * (barWidth + gap)) + (gap / 2);
        const pct = d.value / maxVal;
        const barHeight = chartHeight * pct;
        const y = paddingTop + chartHeight - barHeight;
        
        let color = 'var(--color-primary)';
        if (d.type === 'gasto') color = 'var(--color-error)';
        else if (d.type === 'receita') color = '#10b981'; 
        else if (colorTheme === 'error') color = 'var(--color-error)';
        else if (colorTheme === 'tertiary') color = 'var(--color-tertiary)';
        
        svg += `
            <g class="group cursor-pointer">
                <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${color}" rx="3" class="transition-all duration-300 hover:opacity-80">
                    <title>${d.label}: ${d.value}</title>
                </rect>
                <text x="${x + barWidth / 2}" y="${y - 4}" class="fill-on-surface font-bold text-center" text-anchor="middle" style="font-size: 7px;">${formatChartVal(d.value)}</text>
                <text x="${x + barWidth / 2}" y="${paddingTop + chartHeight + 14}" class="fill-on-surface-variant font-semibold text-center" text-anchor="middle" style="font-size: 8px;">${truncateText(d.label, 12)}</text>
            </g>
        `;
    });
    
    svg += `<line x1="${paddingLeft}" y1="${paddingTop + chartHeight}" x2="${width - paddingRight}" y2="${paddingTop + chartHeight}" stroke="currentColor" stroke-width="1.5" opacity="0.3" />`;
    svg += `</svg>`;
    return svg;
}

function formatChartVal(val) {
    if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
    if (val >= 1000) return (val / 1000).toFixed(1) + 'K';
    if (Number.isInteger(val)) return val;
    return val.toFixed(1);
}

function truncateText(str, maxLen) {
    if (!str) return '';
    return str.length > maxLen ? str.substring(0, maxLen - 1) + '..' : str;
}

let reportVoiceListening = false;
let reportRecognitionInstance = null;

// Obsolete local report voice input handlers removed. Report generation is managed globally.

function parseAndApplyReportFilters(text) {
    const cleanText = text.toLowerCase();
    
    let matchedModule = '';
    let matchedEntity = 'all';
    let matchedStart = '';
    let matchedEnd = '';
    
    if (
        cleanText.includes('caixa') || cleanText.includes('financeiro') || cleanText.includes('finança') || 
        cleanText.includes('financa') || cleanText.includes('gasto') || cleanText.includes('receita') || 
        cleanText.includes('pagamento') || cleanText.includes('compra') || cleanText.includes('venda') || 
        cleanText.includes('ingreso') || cleanText.includes('egreso') || cleanText.includes('custo') || cleanText.includes('lucro')
    ) {
        matchedModule = 'financeiro';
        
        if (cleanText.includes('combustivel') || cleanText.includes('combustível') || cleanText.includes('diesel') || cleanText.includes('gasoil')) {
            matchedEntity = 'cat-gasto-Combustível';
        } else if (cleanText.includes('defensivo') || cleanText.includes('veneno') || cleanText.includes('insumo')) {
            matchedEntity = 'cat-gasto-Defensivos';
        } else if (cleanText.includes('mão de obra') || cleanText.includes('mao de obra') || cleanText.includes('salário') || cleanText.includes('salario') || cleanText.includes('pagamento') || cleanText.includes('diária') || cleanText.includes('diaria') || cleanText.includes('jornal') || cleanText.includes('colaborador') || cleanText.includes('funcionario') || cleanText.includes('funcionário')) {
            matchedEntity = 'cat-gasto-Mão de Obra';
        } else if (cleanText.includes('colheita') || cleanText.includes('venda de grãos') || cleanText.includes('venda de graos') || cleanText.includes('venta') || cleanText.includes('soja') || cleanText.includes('milho')) {
            matchedEntity = 'cat-receita-Colheita';
        }
    } else if (
        cleanText.includes('defensivo') || cleanText.includes('veneno') || cleanText.includes('aplicação') || 
        cleanText.includes('aplicacao') || cleanText.includes('pulverização') || cleanText.includes('pulverizacao') || 
        cleanText.includes('insumo') || cleanText.includes('inseticida') || cleanText.includes('fungicida') || 
        cleanText.includes('herbicida') || cleanText.includes('aplica') || cleanText.includes('rociar') || cleanText.includes('pulveriza')
    ) {
        matchedModule = 'insumos';
    } else if (
        cleanText.includes('diesel') || cleanText.includes('combustível') || cleanText.includes('combustivel') || 
        cleanText.includes('abastecer') || cleanText.includes('abastecimento') || cleanText.includes('gasoil')
    ) {
        matchedModule = 'combustivel';
    } else if (
        cleanText.includes('colheita') || cleanText.includes('colher') || cleanText.includes('safra') || 
        cleanText.includes('grão') || cleanText.includes('grãos') || cleanText.includes('semente') || 
        cleanText.includes('sementes') || cleanText.includes('produção') || cleanText.includes('producao') ||
        cleanText.includes('cosecha') || cleanText.includes('cosechar') || cleanText.includes('granos') || 
        cleanText.includes('semilla') || cleanText.includes('semillas')
    ) {
        matchedModule = 'producao';
    } else if (
        cleanText.includes('cadastro') || cleanText.includes('ativos') || cleanText.includes('funcionários') || 
        cleanText.includes('funcionarios') || cleanText.includes('maquinas') || cleanText.includes('máquinas') || 
        cleanText.includes('talhões') || cleanText.includes('talhoes') || cleanText.includes('lotes') || 
        cleanText.includes('chacras') || cleanText.includes('peão') || cleanText.includes('peon') || 
        cleanText.includes('personal') || cleanText.includes('operário') || cleanText.includes('operario') ||
        cleanText.includes('registros') || cleanText.includes('tabelas') || cleanText.includes('frota')
    ) {
        matchedModule = 'cadastros';
        
        if (cleanText.includes('talhão') || cleanText.includes('talhao') || cleanText.includes('lote') || cleanText.includes('chacra') || cleanText.includes('área') || cleanText.includes('area')) {
            matchedEntity = 'plots';
        } else if (cleanText.includes('maquina') || cleanText.includes('máquina') || cleanText.includes('trator') || cleanText.includes('frota')) {
            matchedEntity = 'machinery';
        } else if (cleanText.includes('colaborador') || cleanText.includes('funcionario') || cleanText.includes('funcionário') || cleanText.includes('staff') || cleanText.includes('equipe') || cleanText.includes('personal')) {
            matchedEntity = 'staff';
        }
    }
    
    if (!matchedModule) {
        if (cleanText.includes('imprimir') || cleanText.includes('print')) {
            setTimeout(() => printActiveReport(), 500);
            return true;
        }
        return false;
    }
    
    const currentYear = 2026;
    
    const ptMonths = {
        'janeiro': '01', 'fevereiro': '02', 'março': '03', 'abril': '04', 'maio': '05', 'junho': '06',
        'julho': '07', 'agosto': '08', 'setembro': '09', 'outubro': '10', 'novembro': '11', 'dezembro': '12'
    };
    const esMonths = {
        'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04', 'mayo': '05', 'junio': '06',
        'julio': '07', 'agosto': '08', 'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
    };
    
    let monthMatched = false;
    Object.keys(ptMonths).forEach(m => {
        if (cleanText.includes(m)) {
            const mm = ptMonths[m];
            matchedStart = `${currentYear}-${mm}-01`;
            const lastDay = new Date(currentYear, parseInt(mm), 0).getDate();
            matchedEnd = `${currentYear}-${mm}-${lastDay}`;
            monthMatched = true;
        }
    });
    
    if (!monthMatched) {
        Object.keys(esMonths).forEach(m => {
            if (cleanText.includes(m)) {
                const mm = esMonths[m];
                matchedStart = `${currentYear}-${mm}-01`;
                const lastDay = new Date(currentYear, parseInt(mm), 0).getDate();
                matchedEnd = `${currentYear}-${mm}-${lastDay}`;
                monthMatched = true;
            }
        });
    }
    
    if (!monthMatched) {
        if (cleanText.includes('este mês') || cleanText.includes('este mes') || cleanText.includes('mês atual') || cleanText.includes('mes actual')) {
            matchedStart = `${currentYear}-05-01`;
            matchedEnd = `${currentYear}-05-31`;
        } else if (cleanText.includes('mês passado') || cleanText.includes('mes pasado')) {
            matchedStart = `${currentYear}-04-01`;
            matchedEnd = `${currentYear}-04-30`;
        } else if (cleanText.includes('este ano') || cleanText.includes('este año') || cleanText.includes('ano atual') || cleanText.includes('año actual')) {
            matchedStart = `${currentYear}-01-01`;
            matchedEnd = `${currentYear}-12-31`;
        } else if (cleanText.includes('hoje') || cleanText.includes('hoy')) {
            matchedStart = `${currentYear}-05-24`;
            matchedEnd = `${currentYear}-05-24`;
        } else if (cleanText.includes('3 meses') || cleanText.includes('últimos 3 meses') || cleanText.includes('ultimos 3 meses')) {
            matchedStart = `${currentYear}-02-23`; 
            matchedEnd = `${currentYear}-05-24`;
        }
    }
    
    db.plots.forEach(p => {
        if (cleanText.includes(p.name.toLowerCase())) {
            matchedEntity = `plot-${p.id}`;
        }
    });
    db.pesticides.forEach(p => {
        if (cleanText.includes(p.name.toLowerCase())) {
            matchedEntity = `pest-${p.id}`;
        }
    });
    db.machinery.forEach(m => {
        if (cleanText.includes(m.name.toLowerCase())) {
            matchedEntity = `mach-${m.id}`;
        }
    });
    db.staff.forEach(s => {
        if (cleanText.includes(s.name.toLowerCase())) {
            if (matchedModule === 'cadastros') {
                matchedEntity = 'staff';
            }
        }
    });
    db.safras.forEach(s => {
        if (cleanText.includes(s.name.toLowerCase())) {
            matchedEntity = `safra-${s.id}`;
        }
    });
    
    const moduleSelect = document.getElementById('report-module-select');
    const startInput = document.getElementById('report-start-date');
    const endInput = document.getElementById('report-end-date');
    
    if (moduleSelect) {
        moduleSelect.value = matchedModule;
        
        populateReportEntitySelect(matchedModule);
        
        const entitySelect = document.getElementById('report-entity-select');
        if (entitySelect) {
            let hasOpt = false;
            for (let i = 0; i < entitySelect.options.length; i++) {
                if (entitySelect.options[i].value === matchedEntity) {
                    entitySelect.value = matchedEntity;
                    hasOpt = true;
                    break;
                }
            }
            if (!hasOpt && matchedEntity !== 'all') {
                entitySelect.value = matchedEntity;
            }
        }
    }
    
    if (matchedStart && startInput) {
        startInput.value = matchedStart;
    }
    if (matchedEnd && endInput) {
        endInput.value = matchedEnd;
    }
    
    triggerManualReportGeneration();
    
    if (cleanText.includes('imprimir') || cleanText.includes('print')) {
        setTimeout(() => printActiveReport(), 1000);
    }
    
    return true;
}

