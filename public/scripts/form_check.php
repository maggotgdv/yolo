<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse 2014.0.30
*/

require_once('form_throttle.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') 
{
	$supportResponse = checkSupport();
	if (!empty($_GET['mode']) and $_GET['mode'] == 'verify')
	{
		echo $supportResponse;
		exit;
	}
	
	echo('<!DOCTYPE html><html><head><title>Muse PHP Diagnostics</title>');
	echo('<style type="text/css">body { font: 14pt Myriad Pro, Arial, Helvetica;}ul { list-style-type: none; }');
	echo(' h1 { background-color: #CCCCCC; padding: 2px;} label {display: inline-block; width: 100px; vertical-align: top;}');
	echo('.good:before { color: green; content:\'\2713\0020\';} .bad:before {color: red; content: \'X\0020\';}');
	echo('</style></head><body>');
	echo('<h1>Diagnostics</h1><ul>');
	
	if (strrpos($supportResponse,'PHP:0;') === false)
	{
		echo('<li class="bad">PHP version too low');
	}
	else 
	{ 
		echo('<li class="good">PHP version ok');
	}
	if (strrpos($supportResponse,'Mail:0;') === false)
	{
		echo('<li class="bad">mail configured incorrectly');
	}
	else
	{
		echo('<li class="good">mail configuration ok');
	}
	
	if (strrpos($supportResponse,'SQL:0;') === false)
	{
		echo('<li class="bad">SQL configuration problem ');
	}
	else 
	{ 
		echo('<li class="good">SQL ok ');
	}
	echo('</ul><br/><br/>');
	
	echo('</body></html>');
}

$phpError = '';
function phpErrorHandler($errno, $errstr, $errfile, $errline)
{
	global $phpError;
    if (!(error_reporting() & $errno)) 
    {
        return;
    }

    $phpError .= $errstr;
    return true;
}

function checkSupport()
{	
	global $phpError;
	set_error_handler("phpErrorHandler");
		
	$throttleSupport = formthrottle_check();
	$response ='SQL:' . $throttleSupport . ';';

	$version = explode('.', PHP_VERSION);
	if ($version[0] < 4 || ($version[0] == 4 && $version[1] < 1))
	{
		$response .='PHP:1;';
		return $response;
	}
	else 
	{ 
		$response .='PHP:0;';
	}

	if (strncasecmp(php_uname('s'), 'win', 3) == 0) 
	{ 
		$mailserver = ini_get('SMTP');
	}
	else
	{
		$mailserver = ini_get('sendmail_path');
	}
	if (strlen($mailserver) == 0)
	{
		$response .='Mail:1;';
	}
	else
	{
		if (!function_exists("mail")) 
		{ 
			$response .='Mail:2;';
		}  
		else
		{
			$sent = mail("recipient@example.com", "Hi", "test message", "From: sender@example.com");
			if($sent)
			{
				$response .='Mail:0;';
			}
			else
			{
				$response .='Mail:3;';			
			}
		}
	}
			
	if($phpError != '')
	{
		$response .='PHPError:' . $phpError;
	}

	return $response;
}
?>