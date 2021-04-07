const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

//variaveis ambiente = Node_env usada para identificar se o ambiente é produção ou dev
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  
  // mode production, demora mais para gerar o bundle, porém otimiza o bundle
  mode: isDevelopment? 'development' :'production',
  
  //Configuração para debugar o codigo original(sem ser o bundle) 
  devtool: isDevelopment? 'eval-source-map': 'source-map',

  //Entry = Arquivo de entrada da aplicação
  //Dirname = Diretorio atual 
  // A ',' é barra, de acordo com sistema operacional
  entry: path.resolve(__dirname,'src','index.jsx'),
  
  //Output = Qual arquivo vai gerar com webpack
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },

  //Para ler arquivos jsx, por padrão apenas ler arquivos js
  resolve: {
    extensions: ['.js','.jsx']
  },

  devServer:{
    contentBase: path.resolve(__dirname,'public'),
    hot:true,
  },

  //Serve para jogar o script do bundle dentro do index.html
  plugins: [
    //Plugin para atualizar a pagina sem resetar o estado do componente
    //O filter serve para se não for desenvolvimento retirar o false, filtrar so o q for verdadeiro
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname,'public','index.html')
    })
  ].filter(Boolean),

  //Configurações como a aplicação vai se comportar com alguma extensão
  //Um objeto pra cada tipo de arquivo, dentro do array de regras
  module: {
    rules: [
      {
        //Regex que valida se o arquivo é jsx ou n
        // $ = termina com alguma extensão
        // \ = É para usar o . sem intepretação do regex
        // babel-loader = integração do babel com webpack
        // babel-loader = webpack importa o arquivo e o babel converte o arquivo, para que o browser entenda
        //Toda x que encontrar arquivos jsx, usa o babel-loader para ler
        test:/\.jsx$/,  
        exclude: /node_modules/,
        use: {
          loader : 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean),
          }
        }
      },
      {
        test:/\.css$/,  
        exclude: /node_modules/,
        use: ['style-loader','css-loader']
      }
    ]
  }
}