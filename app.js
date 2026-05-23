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
        th_amount_converted: 'Equiv. BRL'
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
        th_amount_converted: 'Equiv. BRL'
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
    seedsGrains: []
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
    if (!db.applications || !Array.isArray(db.applications)) db.applications = [];
    if (!db.transactions || !Array.isArray(db.transactions)) db.transactions = [];
    if (!db.seedsGrains || !Array.isArray(db.seedsGrains)) db.seedsGrains = [];
    
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
            seedsGrains: []
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
        const tabs = ['dashboard', 'safras', 'talhoes', 'recursos', 'insumos', 'graos_sementes', 'financeiro', 'inventario'];
        if (tabs[index] === tabId) {
            btn.classList.add('active');
        }
    });

    // Match Mobile Tab bar Buttons
    document.querySelectorAll('#mobile-tabbar button').forEach((btn, index) => {
        const tabs = ['dashboard', 'talhoes', 'recursos', 'insumos', 'financeiro', 'inventario'];
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
                        seedsGrains: []
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
            if (!db.applications || !Array.isArray(db.applications)) db.applications = [];
            if (!db.transactions || !Array.isArray(db.transactions)) db.transactions = [];
            if (!db.seedsGrains || !Array.isArray(db.seedsGrains)) db.seedsGrains = [];
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
                    seedsGrains: []
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
    let currentTankLiters = 0; // Starts at 0, 100% dynamic based on fuel logs
    db.fuelLogs.forEach(f => {
        if (f.cost_value > 0 || f.desc.toLowerCase().includes('reabastecimento') || f.desc.toLowerCase().includes('carga') || f.desc.toLowerCase().includes('compra')) {
            currentTankLiters += f.amount_liters;
        } else {
            currentTankLiters -= f.amount_liters;
        }
    });
    return Math.max(0, Math.min(5000, currentTankLiters));
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
        let totalFuelInStore = 3200; // Simulated tank starting level
        
        // Sum additions and subtractions to simulated level
        db.fuelLogs.forEach(f => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-surface-container-low transition-colors';
            
            const costFormatted = f.cost_value > 0 ? formatCurrency(f.cost_value, f.currency) : '-';
            
            // Format dates simply
            const d = new Date(f.date + 'T00:00:00');
            const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short' });
            
            tr.innerHTML = `
                <td class="p-3 font-semibold text-on-surface-variant">${dateStr}</td>
                <td class="p-3 font-bold">${f.desc}</td>
                <td class="p-3 font-data-numeral">${f.amount_liters} L</td>
                <td class="p-3 text-right font-data-numeral">${costFormatted}</td>
            `;
            fuelTbody.appendChild(tr);
        });

        // Update Circular Gauge details
        const tankMax = 5000;
        const currentTankLiters = getCurrentFuelLevel();
        const pct = Math.round((currentTankLiters / tankMax) * 100);
        
        const countEl = document.getElementById('fuel-tank-liters-count');
        const pctEl = document.getElementById('fuel-tank-percent-gauge');
        const dashOffset = 377 - (377 * pct) / 100;
        const circleGauge = document.getElementById('fuel-tank-circle-gauge');

        if (countEl) countEl.textContent = `${currentTankLiters.toLocaleString()}L`;
        if (pctEl) pctEl.textContent = `${pct}%`;
        if (circleGauge) circleGauge.setAttribute('stroke-dashoffset', dashOffset);
    }
}

// Module 3.5: Unified Stock Inventory Dashboard
function renderInventarioView() {
    // --- Summary KPIs ---
    const t = translations[currentLanguage];
    
    // Total pesticide volume across all products
    const totalPesticideLiters = db.pesticides.reduce((sum, p) => sum + (p.stock_liters || 0), 0);
    const lowStockPesticides = db.pesticides.filter(p => p.stock_liters < 100).length;
    
    const elTotalPest = document.getElementById('inv-kpi-total-pesticides');
    const elLowPest = document.getElementById('inv-kpi-low-pesticides');
    if (elTotalPest) elTotalPest.textContent = `${totalPesticideLiters.toLocaleString()} L`;
    if (elLowPest) elLowPest.textContent = lowStockPesticides > 0 ? `${lowStockPesticides} ${t.inv_low_stock_warning}` : t.inv_ok_stock;
    if (elLowPest) elLowPest.className = lowStockPesticides > 0 ? 'text-[10px] font-bold text-error' : 'text-[10px] font-bold text-primary';

    // Fuel tank level (simulated)
    const fuelLevel = getCurrentFuelLevel();
    const fuelMax = 5000;
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
                const isLow = p.stock_liters < 100;
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
                    <td class="p-4 font-data-numeral ${qtyClass}">${p.stock_liters.toLocaleString()} L</td>
                    <td class="p-4">${statusBadge}</td>
                    <td class="p-4 font-data-numeral text-on-surface-variant">${costStr}</td>
                `;
                pestTbody.appendChild(tr);
            });
        }
    }

    // --- Fuel Logs Table ---
    const fuelTbody = document.getElementById('inv-fuel-tbody');
    if (fuelTbody) {
        fuelTbody.innerHTML = '';
        if (db.fuelLogs.length === 0) {
            fuelTbody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            db.fuelLogs.forEach(f => {
                const d = new Date(f.date + 'T00:00:00');
                const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                const costStr = f.cost_value > 0 ? formatCurrency(f.cost_value, f.currency) : '-';
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
                    <td class="p-4 font-bold text-on-surface">${f.desc}</td>
                    <td class="p-4 font-data-numeral text-primary font-bold">${f.amount_liters.toLocaleString()} L</td>
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
    // 1. Stock Cards
    const pestContainer = document.getElementById('pesticide-stock-container');
    if (pestContainer) {
        pestContainer.innerHTML = '';
        db.pesticides.forEach(p => {
            const card = document.createElement('div');
            card.className = 'bg-surface-container-lowest border border-outline-variant rounded-xl p-5 hover:scale-[1.02] transition-all relative';
            
            // Highlight low stocks below 100 liters
            const isLow = p.stock_liters < 100;
            const stockColorClass = isLow ? 'text-error font-bold' : 'text-primary font-bold';
            
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="bg-tertiary-container/30 text-on-tertiary-container font-bold text-[9px] px-2 py-0.5 rounded uppercase">${p.type}</span>
                    ${isLow ? '<span class="bg-error-container text-on-error-container font-extrabold text-[8px] px-2 py-0.5 rounded animate-pulse uppercase">Estoque Baixo</span>' : ''}
                </div>
                <h4 class="font-headline-md font-bold mb-3 text-on-surface">${p.name}</h4>
                <div class="flex justify-between items-end border-t border-outline-variant/60 pt-3">
                    <span class="text-xs text-on-surface-variant font-bold uppercase">Volume Livre</span>
                    <span class="font-data-numeral text-md ${stockColorClass}">${p.stock_liters} Litros</span>
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
        
        tr.innerHTML = `
            <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
            <td class="p-4 font-bold text-on-surface flex items-center gap-2">${typeBadge} <span>${tx.description}</span></td>
            <td class="p-4 text-on-surface-variant">${tx.category}</td>
            <td class="p-4 text-right font-data-numeral text-sm ${textWeightClass}">${isExp ? '-' : '+'}${originalValueStr}</td>
            <td class="p-4 text-right font-data-numeral text-xs opacity-70">${convertedValueStr}</td>
            <td class="p-4 text-center">
                <button class="text-error hover:text-red-700 transition-colors p-1" onclick="deleteTransaction('${tx.id}')">
                    <span class="material-symbols-outlined text-[18px]">delete</span>
                </button>
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
            opt.textContent = `${p.name} (${p.stock_liters}L)`;
            applyPesticideSelect.appendChild(opt);
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
            opt.textContent = `${p.name} (${p.stock_liters}L)`;
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
    const desc = document.getElementById('fuel-desc').value;
    const liters = parseInt(document.getElementById('fuel-liters').value);
    const machId = document.getElementById('fuel-machinery').value;
    const cost = parseFloat(document.getElementById('fuel-cost').value) || 0;
    const currency = document.getElementById('fuel-currency').value;
    
    if (desc && liters > 0) {
        const id = 'fuel-' + (db.fuelLogs.length + 1);
        const date = new Date().toISOString().split('T')[0];
        
        db.fuelLogs.unshift({ id, date, desc, amount_liters: liters, cost_value: cost, currency });
        
        // If refueling specific machine, fill machine tank!
        if (machId) {
            const mach = db.machinery.find(m => m.id === machId);
            if (mach) {
                mach.fuel_level_percent = Math.min(100, mach.fuel_level_percent + Math.round((liters / 120) * 100)); // Simulating 120L fuel tanks
                mach.last_action = currentLanguage === 'pt-BR' ? 'Abastecido' : 'Abastecido';
            }
        }
        
        // If there was a financial cost, log expenditure too!
        if (cost > 0) {
            const txId = 'tx-' + (db.transactions.length + 1);
            db.transactions.unshift({ id: txId, date, type: 'gasto', description: `Combustível: ${desc}`, amount: cost, currency, category: 'Combustível', plot_id: '' });
        }
        
        saveDatabaseLocally();
        closeModal('modal-add-combustivel');
        renderRecursosView();
        renderFinancialView();
        renderDashboard();
        showToast(currentLanguage === 'pt-BR' ? 'Abastecimento registrado!' : '¡Abastecimiento registrado!');
    }
}

// Add Pesticide stock
function handleFormSubmitPesticideStock(e) {
    e.preventDefault();
    const name = document.getElementById('pesticide-name').value;
    const type = document.getElementById('pesticide-type').value;
    const stock = parseInt(document.getElementById('pesticide-stock').value);
    const cost = parseFloat(document.getElementById('pesticide-cost').value) || 0;
    const costCurrency = document.getElementById('pesticide-cost-currency').value || 'BRL';
    
    if (name && stock >= 0) {
        const id = 'pest-' + Date.now();
        db.pesticides.push({ id, name, type, stock_liters: stock });
        
        // If a cost was entered, automatically register financial expense
        if (cost > 0) {
            const txId = 'tx-' + Date.now();
            const date = new Date().toISOString().split('T')[0];
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
                amount_purchased: stock
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
            if (pest.stock_liters < amount) {
                showToast(currentLanguage === 'pt-BR' ? 'Estoque insuficiente no depósito!' : '¡Stock insuficiente en el depósito!', true);
                return;
            }
            pest.stock_liters -= amount;
        }
        
        const weatherCond = `${currentLanguage === 'pt-BR' ? 'Ensolarado' : 'Soleado'}, ${simulatedTemp}°C, ${currentLanguage === 'pt-BR' ? 'Vento' : 'Viento'} ${simulatedWindSpeed} km/h`;
        
        db.applications.unshift({ id, date, plot_id: plotId, pesticide_id: pesticideId, amount_applied: amount, weather_condition: weatherCond });
        
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
    if (tx && tx.pesticide_id && tx.amount_purchased) {
        const pest = db.pesticides.find(p => p.id === tx.pesticide_id);
        if (pest) {
            pest.stock_liters = Math.max(0, (pest.stock_liters || 0) - tx.amount_purchased);
            renderInsumosView();
            populateSelectDropdowns();
        }
    }
    
    db.transactions = db.transactions.filter(t => t.id !== id);
    saveDatabaseLocally();
    renderFinancialView();
    renderDashboard();
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
                db.seedsGrains.unshift({
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
                db.fuelLogs.unshift({
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
        db.seedsGrains.unshift({
            id: seedId,
            date,
            type: 'Grão Colhido',
            name: crop,
            quantity: bags,
            unit: 'sc',
            safra_id: activeSafraId,
            cost: totalRevenueBrl,
            currency: 'BRL'
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
        
        db.seedsGrains.unshift({
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
window.applyTreatmentFromScan = applyTreatmentFromScan;
window.clearAIChat = clearAIChat;
window.toggleAIChat = toggleAIChat;
window.openPestPhotosSelector = openPestPhotosSelector;
window.handleChatInputKey = handleChatInputKey;
window.sendChatTextMessage = sendChatTextMessage;
window.toggleVoiceInput = toggleVoiceInput;
window.selectPestSample = selectPestSample;
window.handlePestPhotoUpload = handlePestPhotoUpload;

// ==================== 14. GRÃOS & SEMENTES & SAFRAS MODULES ====================

function renderSeedsGrains() {
    const t = translations[currentLanguage];
    
    // 1. Render in Inventário table
    const invTbody = document.getElementById('inv-seeds-grains-tbody');
    if (invTbody) {
        invTbody.innerHTML = '';
        if (!db.seedsGrains || db.seedsGrains.length === 0) {
            invTbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            const sorted = [...db.seedsGrains].sort((a, b) => new Date(b.date) - new Date(a.date));
            sorted.forEach(item => {
                const d = new Date(item.date + 'T00:00:00');
                const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                const safra = db.safras.find(s => s.id === item.safra_id);
                const safraName = safra ? safra.name : item.safra_id;
                const costStr = formatCurrency(item.cost, item.currency);
                
                let typeBadge = '';
                if (item.type === 'Semente Comprada') {
                    typeBadge = `<span class="bg-primary-container text-on-primary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_seed_bought || item.type}</span>`;
                } else if (item.type === 'Semente Tratada') {
                    typeBadge = `<span class="bg-tertiary-container text-on-tertiary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_seed_treated || item.type}</span>`;
                } else {
                    typeBadge = `<span class="bg-secondary-container text-on-secondary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_grain_harvested || item.type}</span>`;
                }
                
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
                    <td class="p-4">${typeBadge}</td>
                    <td class="p-4 font-bold text-on-surface">${item.name}</td>
                    <td class="p-4 font-data-numeral text-primary font-bold">${item.quantity.toLocaleString()} ${item.unit}</td>
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

    if (db.seedsGrains && db.seedsGrains.length > 0) {
        db.seedsGrains.forEach(item => {
            const qty = parseFloat(item.quantity) || 0;
            if (item.type === 'Semente Comprada') {
                boughtSum += qty;
            } else if (item.type === 'Semente Tratada') {
                treatedSum += qty;
            } else if (item.type === 'Grão Colhido') {
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
        if (!db.seedsGrains || db.seedsGrains.length === 0) {
            gsTbody.innerHTML = `<tr><td colspan="7" class="p-4 text-center text-on-surface-variant opacity-60">${t.inv_no_data}</td></tr>`;
        } else {
            const sorted = [...db.seedsGrains].sort((a, b) => new Date(b.date) - new Date(a.date));
            sorted.forEach(item => {
                const d = new Date(item.date + 'T00:00:00');
                const dateStr = d.toLocaleDateString(currentLanguage === 'pt-BR' ? 'pt-BR' : 'es-PY', { day: 'numeric', month: 'short', year: 'numeric' });
                const safra = db.safras.find(s => s.id === item.safra_id);
                const safraName = safra ? safra.name : item.safra_id;
                const costStr = formatCurrency(item.cost, item.currency);
                
                let typeBadge = '';
                if (item.type === 'Semente Comprada') {
                    typeBadge = `<span class="bg-primary-container text-on-primary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_seed_bought || item.type}</span>`;
                } else if (item.type === 'Semente Tratada') {
                    typeBadge = `<span class="bg-tertiary-container text-on-tertiary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_seed_treated || item.type}</span>`;
                } else {
                    typeBadge = `<span class="bg-secondary-container text-on-secondary-container text-[9px] px-2 py-0.5 rounded font-bold uppercase">${t.type_grain_harvested || item.type}</span>`;
                }
                
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-surface-container-low transition-colors';
                tr.innerHTML = `
                    <td class="p-4 text-on-surface-variant font-semibold">${dateStr}</td>
                    <td class="p-4">${typeBadge}</td>
                    <td class="p-4 font-bold text-on-surface">${item.name}</td>
                    <td class="p-4 font-data-numeral text-primary font-bold">${item.quantity.toLocaleString()} ${item.unit}</td>
                    <td class="p-4 text-on-surface-variant">${safraName}</td>
                    <td class="p-4 font-data-numeral text-right font-bold text-on-surface">${costStr}</td>
                    <td class="p-4 text-center">
                        <button class="text-on-surface-variant hover:text-error transition-colors" onclick="deleteSeedGrainItem('${item.id}')" title="Excluir">
                            <span class="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                    </td>
                `;
                gsTbody.appendChild(tr);
            });
        }
    }

    // 3. Render type distribution progress bars
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

    // 4. Render product distribution progress bars (top 5)
    const productContainer = document.getElementById('gs-product-distribution');
    if (productContainer) {
        productContainer.innerHTML = '';
        const prodTotals = {};
        let totalProdQty = 0;
        if (db.seedsGrains) {
            db.seedsGrains.forEach(item => {
                const qty = parseFloat(item.quantity) || 0;
                prodTotals[item.name] = (prodTotals[item.name] || 0) + qty;
                totalProdQty += qty;
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
    const type = document.getElementById('seed-grain-type').value;
    const name = document.getElementById('seed-grain-name').value;
    const qty = parseFloat(document.getElementById('seed-grain-qty').value);
    const unit = document.getElementById('seed-grain-unit').value;
    const safraId = document.getElementById('seed-grain-safra').value;
    const cost = parseFloat(document.getElementById('seed-grain-cost').value);
    const currency = document.getElementById('seed-grain-currency').value;
    const autoTx = document.getElementById('seed-grain-auto-tx').checked;
    
    if (type && name && qty > 0 && safraId && cost >= 0) {
        const id = 'sg-' + Date.now();
        const today = new Date().toISOString().split('T')[0];
        
        db.seedsGrains.push({
            id,
            type,
            name,
            quantity: qty,
            unit,
            safra_id: safraId,
            cost,
            currency,
            date: today
        });
        
        if (autoTx) {
            const txId = 'tx-' + Date.now();
            const safra = db.safras.find(s => s.id === safraId);
            const safraName = safra ? safra.name : '';
            
            if (type === 'Semente Comprada' || type === 'Grão Colhido') {
                const txType = type === 'Semente Comprada' ? 'gasto' : 'receita';
                const txDesc = type === 'Semente Comprada'
                    ? `${translations[currentLanguage].type_seed_bought || 'Compra Sementes'}: ${name} (${qty} ${unit}) - ${safraName}`
                    : `${translations[currentLanguage].type_grain_harvested || 'Colheita Grãos'}: ${name} (${qty} ${unit}) - ${safraName}`;
                
                db.transactions.push({
                    id: txId,
                    date: today,
                    description: txDesc,
                    category: type === 'Semente Comprada' ? 'Insumos' : 'Colheita',
                    type: txType,
                    amount: cost,
                    currency,
                    plot_id: ''
                });
            }
        }
        
        saveDatabaseLocally();
        closeModal('modal-add-semente-grao');
        renderSeedsGrains();
        renderInventarioView();
        
        const msg = currentLanguage === 'pt-BR' ? 'Registro de semente/grão salvo com sucesso!' : '¡Registro de semilla/grano guardado con éxito!';
        showToast(msg);
        
        e.target.reset();
    }
}

function deleteSeedGrainItem(id) {
    if (confirm(currentLanguage === 'pt-BR' ? 'Tem certeza que deseja remover este registro?' : '¿Está seguro de que desea eliminar este registro?')) {
        db.seedsGrains = db.seedsGrains.filter(item => item.id !== id);
        saveDatabaseLocally();
        renderSeedsGrains();
        renderInventarioView();
        showToast(currentLanguage === 'pt-BR' ? 'Registro excluído!' : '¡Registro eliminado!');
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

