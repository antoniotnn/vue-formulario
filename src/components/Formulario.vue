<template>
    <div class="container">
        <div class="row">
            <div class="col-6 bg-light">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <!--<form @submit.prevent="enviar($event)">-->
                <!--<form @reset.prevent="resetar()">-->
                <div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.nome">
                        </div>
                        <!-- Modificadores do v-model: number, trim e lazy. Exemplo; form.trim.nome, form.lazy.nome, form.number.nome (OBS: modificadores podem ser encadeados) -->
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model="form.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <input type="password" class="form-control" v-model.trim="form.senha">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" v-model.number="form.idade">
                            <!-- obs: no vue 2, se o input for number, o dado é recebido como string. Entao no vue 2, é interessante usar o modificador.number no v-model para assegurar que o atrr conectado ao input de fato receba um number.-->
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Feminino" v-model="form.genero">
                                <label class="form-check-label">
                                    Feminino
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Masculino" v-model="form.genero">
                                <label class="form-check-label">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input"
                                    type="checkbox"
                                    v-model="form.licenca"
                                    true-value="SIM"
                                    false-value="NÃO"
                                >
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="JavaScript" v-model="form.interesses">
                                <label class="form-check-label">
                                    JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="VueJS" v-model="form.interesses">
                                <label class="form-check-label">
                                    VueJS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Angular" v-model="form.interesses">
                                <label class="form-check-label">
                                    Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="NodeJS" v-model="form.interesses">
                                <label class="form-check-label">
                                    NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <!--<input type="tel" class="form-control" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}">-->
                            <input type="text" class="form-control" v-maska="'(##) #####-####'" v-model="form.telefone">
                            <small class="text-muted">Formato: 11 97777-5555</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CEP:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'#####-###'" v-model="form.cep">
                            <small class="text-muted">Formato: 00000-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CPF:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'###.###.###-##'" v-model="form.cpf">
                            <small class="text-muted">Formato: 000.000.000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CNPJ:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'##.###.###/####-##'" v-model="form.cnpj">
                            <small class="text-muted">Formato: 00.000.000/0000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cartão de Crédito:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'#### #### #### ####'" v-model="form.cartaoDeCredito">
                            <small class="text-muted">Formato: 0000 0000 0000 0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa Veículo:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'AAA-####'" v-model="form.placaVeiculo">
                            <small class="text-muted">Formato: AAA-0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa Veículo Mercosul:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'AAA#A##'" v-model="form.placaVeiculoMercosul">
                            <small class="text-muted">Formato: AAA0A00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">RG:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'#*-X'" v-model="form.rg">
                            <small class="text-muted">Formato: Sem Padrão</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date" class="form-control" v-model="form.data">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local" class="form-control" v-model="form.dataHoraLocal">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month" class="form-control" v-model="form.mes">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week" class="form-control" v-model="form.semana">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time" class="form-control" v-model="form.hora">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color" class="form-color" v-model="form.cor">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite:</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="100" step="1" v-model="form.alcance">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="form.escondido">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <input type="file" class="form-control" multiple @change="selecionarArquivos($event)"> <!-- OBS: chamar assim: selecionarArquivos  sem parenteses nem parametros, faz com que por padrão o $event seja encaminhado também. --><!-- Vue 3, ou 2, ainda não suportam v-model para input type file --> <!--Atributo multiple para poder colocar vários arquivos -->
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Descrição:</label>
                        <div class="col">
                            <textarea class="form-control" rows="3" v-model="form.descricao"></textarea>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cursos:</label>
                        <div class="col">
                            <select class="form-select" v-model="form.curso">
                                <option value="" disabled>-- Selecione uma opção --</option>
                                <option 
                                v-for="curso in cursos"
                                :key="curso.id"
                                :value="curso.id"
                                >
                                    {{ curso.id }} - {{ curso.curso }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Avaliação:</label>
                        <div class="col">
                            <!--<input-estrelas :numero-estrelas="5" @avaliar="form.avaliacao = $event" /> --><!-- Se o bind não for feito, isto é se o numero-estrelas estiver sem os : (dois pontos) na frente, o que o vue passará para o componente será String e não um number. Por isso que o bind está sendo usado. E para passar String usando o bind, a sintaxe ficaria assim:  :numero-estrelas="'4'" -->
                            <input-estrelas :numero-estrelas="5" v-model:avaliar="form.avaliacao" /> 
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3 row">
                        <div class="col d-flex justify-content-between">
                            <button class="btn btn-secondary" type="button" @click="resetar()">Limpar (btn)</button>
                            <button class="btn btn-secondary" type="reset">Limpar (reset)</button>
                            <button class="btn btn-success" type="button" @click="enviar()">Enviar (btn)</button>
                            <button class="btn btn-success" type="submit">Enviar (submit)</button>
                        </div>                        
                    </div>
                </div>   
                <!--</form>-->
            </div>

            
            <div class="col-6 text-white bg-secondary" :style="'background-color:'+form.cor+'!important'">
                <span class="fs-4">ESTADO DO OBJETO</span>
                <hr>
                <div class="mb-5 row">
                    <span>{{ form }}</span>
                </div>

                <span class="fs-4">SAÍDA DE DADOS</span>
                <hr>
                <div class="mb-3 row">
                    <span>Nome: {{ form.nome }}</span>
                </div>
                <div class="mb-3 row">
                    <span>E-mail: {{ form.email }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Senha: {{ form.senha }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Idade: {{ form.idade }} </span>
                </div>
                <div class="mb-3 row">
                    <span>Gênero: {{ form.genero }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Licença: {{ form.licenca }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Interesses:</span>
                    <ul>
                        <li v-for="(interesse, index) in form.interesses" :key="index">{{ interesse }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Telefone: {{ form.telefone }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CEP: {{ form.cep }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CPF: {{ form.cpf }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CNPJ: {{ form.cnpj }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cartão de Crédito: {{ form.cartaoDeCredito }}</span>
                </div>
                <div class="mb-3 row">
                    <span>placaVeiculo: {{ form.placaVeiculo }}</span>
                </div>
                <div class="mb-3 row">
                    <span>placaVeiculoMercosul: {{ form.placaVeiculoMercosul }}</span>
                </div>
                <div class="mb-3 row">
                    <span>rg: {{ form.rg }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data: {{ form.data }} | {{ $moment(form.data).format('DD/MM/YYYY') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data/hora local: {{ form.dataHoraLocal }}</span>
                    <ul>
                        <li>{{ $moment(form.dataHoraLocal).format('dddd') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(10, 'days').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(1, 'months').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(2, 'years').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).subtract(10, 'days').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).subtract(1, 'months').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).subtract(2, 'years').format('LL')}}</li>
                        <li>{{ $moment(form.dataHoraLocal).format('LLLL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(2, 'days').format('LLLL') }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Mês: {{ form.mes }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Semana: {{ form.semana }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Hora: {{ form.hora }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cor: {{ form.cor }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Valor limite: {{ form.alcance }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Escondido: {{ form.escondido }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Upload:</span>
                    <ul>
                        <li v-for="(arquivo, index) in form.arquivos" :key="index">{{ arquivo.name }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Descrição: </span>
                    <!--<pre>Descrição: {{ form.descricao }}</pre>-->
                    <div style="white-space: pre">{{ form.descricao }}</div>
                </div>
                <div class="mb-3 row">
                    <span>Curso: {{ form.curso }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Avaliação: {{ form.avaliacao }}</span>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
//import moment from 'moment';
//console.log(moment);
import InputEstrelas from '@/components/InputEstrelas.vue';

export default {
    components: {
        InputEstrelas
    },
    name: 'Formulario',
    data: () => ({
        //moment: {},
        cursos: [
            { id: 1, curso: 'Bancos de Dados Relacionais' },
            { id: 2, curso: 'Desenvolvimento Web Avançado com Vue' },
            { id: 3, curso: 'Desenvolvimento Web Avançado com Laravel' },
            { id: 4, curso: 'Curso Completo do Desenvolvedor NodeJS e MongoDB' }
        ],
        form: {},
        formEstadoInicial: {
            nome: 'Antonio',
            email: 'tonan@outlook.com.br',
            senha:  '123456',
            idade: '37',
            licenca: 'SIM',
            interesses: ['VueJS', 'Angular'],
            genero: 'Feminino',
            telefone: '',
            cep: '',
            cpf: '',
            cnpj: '',
            cartaoDeCredito: '',
            placaVeiculo: '',
            placaVeiculoMercosul: '',
            rg: '',
            data: '',
            dataHoraLocal: '',
            mes: '',
            semana: '',
            hora: '',
            cor: '#6c757d',
            alcance: 5,
            escondido: 'Esse input está escondido',
            arquivos: {},
            descricao: '',
            curso: '',
            avaliacao: 0
        }
    }),
    methods: {
        selecionarArquivos(event) {
            //console.log(event.target.files);
            this.form.arquivos = event.target.files;
        },
        enviar() {
            //console.log(event);
            console.log(this.form);

            const formEnvio = Object.assign({}, this.form); //no envio de formulários, recomendado trabalhar com uma cópia dos dados a serem enviados ao backend, garantindo a integridade dos dados originais. Neste caso utilizamos o Object.assign , nativo do JS.

            console.log(formEnvio);

            //uma requisição http para um backend da aplicação
            //retorna uma promise que nos vai permitir tomar acões se a requisição tiver sucesso ou não.
        },
        resetar() {
            this.form = Object.assign({}, this.formEstadoInicial);
        }
    },
    created() {
        //this.moment = moment;
        this.resetar();
    }
}
</script>
